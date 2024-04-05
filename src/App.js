import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import Dates from "./components/Dates";
import { State } from "./context/stateContext";
import { useContext } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const {
    name,
    setName,
    address,
    email,
    phone,
    bankName,
    bankAccount,
    clientName,
    setClientName,
    clientAddress,
    customerNumber,
    setCustomerNumber,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    notes,
    setNotes,
    componentRef,
  } = useContext(State);
  const [showInvoice, setShowInvoice] = React.useState(true);

  const handleDownloadPDF = () => {
    // Hide print and download buttons
    const downloadButton = document.querySelector(".download-btn");
    downloadButton.style.display = "none";
  
    const input = componentRef.current;
  
    html2canvas(input, {
      scale: 3, 
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth, 
      windowHeight: document.documentElement.offsetHeight, 
      useCORS: true, 
      logging: true 
    }).then((canvas) => {
     
      downloadButton.style.display = "block";
  
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait', 
        unit: 'px', 
        format: [canvas.width, canvas.height] 
      });
      const imgWidth = pdf.internal.pageSize.getWidth(); 
      const imgHeight = (canvas.height * imgWidth) / canvas.width; 
  
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    });
};
  return (
    <>
    <ToastContainer position="top-right" theme="colored" />

      <main className="p-4 md:p-8 xl:max-w-screen-lg md:max-w-screen-sm mx-auto bg-white rounded shadow-lg">
        {showInvoice ? (
          <>
          <div className="invoice__preview bg-white p-5 rounded-2xl border-2 border-blue-200">
          
           <div ref={componentRef} className="p-5">
            <div className="flex justify-between">
            <Header />
            <div>
            {/* <ReactToPrint
            trigger={() => (
              <button className="print-btn bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print
              </button>
            )}
            content={() => componentRef.current}
          /> */}
          <button className="download-btn bg-gray-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-gray-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-gray-400" onClick={handleDownloadPDF}>Download</button>
            </div>
           
            </div>
            <MainDetails />
            <ClientDetails />
            <Dates />
            <Table />
            <Notes />
            <Footer />
            </div>
            <button onClick={()=> setShowInvoice(false)} className="mt-5 text-white font-bold bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Create Invoice </button>
          </div>
          </>
        ) : (
          <>
          <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Cashier's name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    maxLength={56}
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Company's Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    // placeholder="Enter your address"
                    autoComplete="off"
                    maxLength={96}
                    value={address}
                    disabled
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Company's Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    maxLength={255}
                    autoComplete="off"
                    value={email}
                    disabled
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Company's Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    disabled
                    // onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Bank</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={56}
                    autoComplete="off"
                    value={bankName}
                    disabled
                    // onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    maxLength={10}
                    autoComplete="off"
                    value={bankAccount}
                    disabled
                    // onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Customer's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter customer's name"
                    maxLength={56}
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="customerNumber">Customer's Phone Number</label>
                  <input
                    type="text"
                    name="customerNumber"
                    id="customerNumber"
                    placeholder="Enter customer's phone number"
                    maxLength={11}
                    autoComplete="off"
                    value={customerNumber}
                    onChange={(e) => setCustomerNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                  Customer's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your customer's address"
                    maxLength={96}
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    maxLength={6}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    required
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                maxLength={500}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </section>

          <div>
            <button onClick={()=> setShowInvoice(true)} className="text-white font-bold bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Preview Invoice
            </button>
          </div>
           
          </>
        )}
      </main>
    </>
  );
}

export default App;
