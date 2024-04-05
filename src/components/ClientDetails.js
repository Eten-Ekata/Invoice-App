import { useContext } from "react";
import { State } from "../context/stateContext";

const ClientDetails = () => {
  const { clientName, customerNumber } = useContext(State);
  return (
    <> 
    <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
        <p>Phone Number: {customerNumber}</p>
      </section>
  </>
  )
}

export default ClientDetails