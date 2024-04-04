function App() {
  return (
    <>
      <main className="p-5 m-5 xl:max-w-4xl xl:max-auto bg-white rounded shadow">
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoice</h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
            <li><button className="btn btn-print">Print</button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li> <button className="btn btn-send">Send</button></li>
            </ul>
          </div>
        </header>

        <section className="flex flex-col items-end justify-end">
          {/* <input type="text" name="text" id="text" placeholder="Enter your name" required/> */}
          <h2 className="text-xl uppercase">Ekata Eten</h2>
          <p>Your address</p>
        </section>
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client's Name</h2>
          <p>Client's address</p>
        </section>

        <article className="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoice Number:</span></li>
            <li><span className="font-bold">Invoice Date:</span></li>
            <li><span className="font-bold">Due Date:</span></li>
          </ul>
        </article>
<div className="my-5">this is the table</div>
        <section className="mb-5">
          <p>Notes to client...</p>
        </section>

        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your Name: </span>Ekata Eten</li>
            <li><span className="font-bold">Your email: </span>eten@yahoo.com</li>
            <li><span className="font-bold">Phone Number: </span>07089675545</li>
            <li><span className="font-bold">Bank: </span>Edubanc</li>
            <li><span className="font-bold">Account Holder: </span>Ekata Eten</li>
            <li><span className="font-bold">Account Number: </span>3408577434</li>
            <li><span className="font-bold">Website: </span>eten.com</li>
          </ul>
        </footer>
      </main>
    </>
  );
}

export default App;
