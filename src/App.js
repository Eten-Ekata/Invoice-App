import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from "./components/Dates";
function App() {
  const [showInvoice, setShowInvoice] = React.useState(false);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [bankName, setBankName] = React.useState('');
  const [bankAccount, setBankAccount] = React.useState('');
  const [clientName, setClientName] = React.useState('');
  const [clientAddress, setClientAddress] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [invoiceNumber, setInvoiceNumber] = React.useState('');
  const [invoiceDate, setInvoiceDate] = React.useState('');
  const [dueDate, setDueDate] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [amount, setAmount] = React.useState("");
  return (
    <>
      <main className="p-5 m-5 xl:max-w-4xl md:max-w-xl md:max-auto xl:max-auto bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header />
            <MainDetails name={name} address={address}/>
            <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
            <Dates invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} dueDate={dueDate}/>
            <Table />
            <Notes notes={notes}/>
            <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName}/>
            <button onClick={()=> setShowInvoice(false)} className="mt-5 text-white font-bold bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information </button>
          </div>
        ) : (
          <>
          <div className="flex flex-col justify-center">
            <label htmlFor="name">Enter your name</label>
          <input
              type="text"
              name="text"
              id="name"
              placeholder="Enter your name"
              required
              autoComplete="off"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

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

              <label htmlFor="phone">Enter your phone number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

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
