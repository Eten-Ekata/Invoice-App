import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import { State } from "../context/stateContext";

const TableForm = () => {
    const {
        description,
        setDescription,
        quantity,
        setQuantity,
        price,
        setPrice,
        amount,
        list,
        total,
        isEditing,
        showModal,
        setShowModal,
        handleSubmit,
        editRow,
        work,
        setWork,
        status,
        setStatus
      } = useContext(State);
  return (
    <>
    <ToastContainer position="top-right" theme="colored" />

<form onSubmit={handleSubmit}>
  <div className="flex flex-col md:mt-16">
    <label htmlFor="description">Material</label>
    <input
      type="text"
      name="description"
      id="description"
      placeholder="Materials"
      maxLength={30}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  <div className="md:grid grid-cols-3 gap-10">
    <div className="flex flex-col">
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        placeholder="Quantity"
        maxLength={33}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="price">Rate</label>
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Rate"
        maxLength={33}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="price">Work Hours</label>
      <input
        type="text"
        name="work"
        id="work"
        placeholder="Work Hours"
        maxLength={33}
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="price">Status</label>
      <input
        type="text"
        name="status"
        id="status"
        placeholder="Status"
        maxLength={20}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="amount">Amount</label>
      <p>{amount}</p>
    </div>
  </div>
  <button
    type="submit"
    className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
  >
    {isEditing ? "Finish Editing" : "Add Line Item"}
  </button>
</form>

{/* Table items */}

<table width="100%" className="mb-10 overflow-auto">
  <thead>
    <tr className="bg-gray-100 p-1">
      <td className="font-bold">Material</td>
      <td className="font-bold">Quantity</td>
      <td className="font-bold">Rate</td>
      <td className="font-bold">Work Hours</td>
      <td className="font-bold">Status</td>
      <td className="font-bold">Amount</td>

    </tr>
  </thead>
  {list.map(({ id, description, quantity, price, amount, work, status}) => (
    <React.Fragment key={id}>
      <tbody>
        <tr className="h-10">
          <td>{description}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{work}</td>
          <td>{status}</td>
          <td className="amount">{amount}</td>
          <td>
            <button onClick={() => editRow(id)}>
              <AiOutlineEdit className="text-green-500 font-bold text-xl" />
            </button>
          </td>
          <td>
            <button onClick={() => setShowModal(true)}>
              <AiOutlineDelete className="text-red-500 font-bold text-xl" />
            </button>
          </td>
        </tr>
      </tbody>
      {showModal && <DeleteModal id={id} />}
    </React.Fragment>
  ))}
</table>

<div>
  <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
    N{total.toLocaleString()}
  </h2>
</div>
    </>
  )
}

export default TableForm