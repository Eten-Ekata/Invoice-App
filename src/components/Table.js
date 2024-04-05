import React, { useContext } from "react";
import { State } from "../context/stateContext";

const Table = () => {
  const { list, total, } = useContext(State);
  console.log(total)
  return (
    <>
     <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Materials</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td className="font-bold">Work Hours</td>
            <td className="font-bold">Status</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount, work, status }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
                <td>{work}</td>
                <td>{status}</td>
              </tr>
            </tbody>
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

export default Table