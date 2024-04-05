import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import Dates from "./components/Dates";
import ReactToPrint from "react-to-print";
import { State } from "./context/stateContext";
import { useContext } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function App() {
  const {
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    phone,
    setPhone,
    bankName,
    setBankName,
    bankAccount,
    setBankAccount,
    website,
    setWebsite,
    clientName,
    setClientName,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
    componentRef,
  } = useContext(State);
  const [showInvoice, setShowInvoice] = React.useState(true);
  // const [name, setName] = React.useState('');
  // const [address, setAddress] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [phone, setPhone] = React.useState('');
  // const [bankName, setBankName] = React.useState('');
  // const [bankAccount, setBankAccount] = React.useState('');
  // const [clientName, setClientName] = React.useState('');
  // const [clientAddress, setClientAddress] = React.useState('');
  // const [website, setWebsite] = React.useState('');
  // const [invoiceNumber, setInvoiceNumber] = React.useState('');
  // const [invoiceDate, setInvoiceDate] = React.useState('');
  // const [dueDate, setDueDate] = React.useState('');
  // const [notes, setNotes] = React.useState('');
  // const [description, setDescription] = React.useState("");
  // const [quantity, setQuantity] = React.useState("");
  // const [price, setPrice] = React.useState("");
  // const [amount, setAmount] = React.useState("");
  const handleDownloadPDF = () => {
    // Hide print and download buttons
    const downloadButton = document.querySelector(".download-btn");
    downloadButton.style.display = "none";
  
    const input = componentRef.current;
  
    html2canvas(input, {
      scale: 2,
      scrollX: 0,
      scrollY: -window.scrollY,
    }).then((canvas) => {
     
      downloadButton.style.display = "block";
  
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };
  return (
    <>
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
            <button onClick={()=> setShowInvoice(false)} className="mt-5 text-white font-bold bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information </button>
          </div>
          </>
        ) : (
          <>
          <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
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
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    maxLength={96}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    maxLength={255}
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    maxLength={96}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={56}
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your bank account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    maxLength={20}
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    maxLength={56}
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    maxLength={96}
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
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
