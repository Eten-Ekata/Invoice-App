import { useContext } from "react";
import { State } from "../context/stateContext";

const Footer = () => {
  const { name, email, phone, bankAccount, bankName } = useContext(State);
  return (
    <>
    <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Cashier's Name:</span> {name}
          </li>
          <li>
            <span className="font-bold">email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Phone number:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account number:</span> {bankAccount}
          </li>
        </ul>
      </footer>

      <p className="text-center px-5 mt-8 text-xs ">
        Invoice is built by
        <a
          href="https://github.com/Eten-Ekata/Invoice-App"
          target="_blank"
          rel="noreferrer"
          className="underline ml-2"
        >
          Ekata Eten
        </a>
      </p>
  </>
  )
}

export default Footer