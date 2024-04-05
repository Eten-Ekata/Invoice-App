import { useContext } from "react";
import { State } from "../context/stateContext";

const ClientDetails = () => {
  const { clientName, clientAddress } = useContext(State);
  return (
    <> 
    <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
  </>
  )
}

export default ClientDetails