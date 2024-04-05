import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";

export const State = createContext();

export default function StateContext({ children }) {
  function getCurrentDate() {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear();
  
    return `${month}/${day}/${year}`;
  }
  const storedItems = JSON.parse(localStorage.getItem('invoice'))
  const storedName = JSON.parse(localStorage.getItem('name'))
  const storedEmail = JSON.parse(localStorage.getItem('email'))
  const storedInvoice = JSON.parse(localStorage.getItem('invoicenum'))
  const storedCustomer = JSON.parse(localStorage.getItem('customer'))
  const storedCustomerNumber = JSON.parse(localStorage.getItem('customernum'))
  const storedNote = JSON.parse(localStorage.getItem('note'))
  const [name, setName] = useState(storedName);
  const [address, setAddress] = useState("Sterling Towers, 20 Marina Rd, Lagos Island, Lagos 101223, Lagos");
  const [email, setEmail] = useState(storedEmail);
  const [phone, setPhone] = useState('0703 092 2000');
  const [bankName, setBankName] = useState('Edubanc');
  const [bankAccount, setBankAccount] = useState('2045688364');
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState(storedCustomer);
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(storedInvoice);
  const [invoiceDate, setInvoiceDate] = useState(getCurrentDate());
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState(storedNote);
  const [description, setDescription] = useState("");
  const [work, setWork] = useState("")
  const [status, setStatus] = useState("")
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState(storedItems);
  const [customerNumber, setCustomerNumber] = useState(storedCustomerNumber)
  const [total, setTotal] = useState(0);
  const [width] = useState(641);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience");
    }
  }, [width]);

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price || !work || !status) {
      toast.error("Please fill in all line items");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
        work,
        status
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setWork("");
      setStatus("");
      setList([...list, newItems]);
      setIsEditing(false);
      console.log(list);
    }
  };

  useEffect(() => {
    localStorage.setItem('invoice', JSON.stringify(list))
    localStorage.setItem('name', JSON.stringify(name))
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('phone', JSON.stringify(phone))
    localStorage.setItem('note', JSON.stringify(notes))
    localStorage.setItem('customer', JSON.stringify(clientName))
    localStorage.setItem('invoicenum', JSON.stringify(invoiceNumber))
    localStorage.setItem('customernum', JSON.stringify(customerNumber))
  
  }, [list, name, email, phone, bankName, invoiceNumber, notes, clientName, customerNumber])

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  const calculateTotal = () => {
    const allItems = list.map((item) => item.amount);

    setTotal(collect(allItems).sum());
  };

  useEffect(() => {
    calculateTotal();
  });

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setWork(editingRow.work);
    setStatus(editingRow.status);
  };

  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
    // CalcSum();
    setShowModal(false);
  };

  const context = {
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
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal,
    width,
    componentRef,
    handlePrint,
    isEditing,
    setIsEditing,
    showModal,
    setShowModal,
    handleSubmit,
    editRow,
    deleteRow,
    showLogoutModal,
    setShowLogoutModal,
    work,
    setWork,
    status,
    setStatus,
    customerNumber,
    setCustomerNumber,
    storedItems
  };

  return <State.Provider value={context}>{children}</State.Provider>;
}