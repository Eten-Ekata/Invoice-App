import { useContext } from "react";
import { State } from "../context/stateContext";

const Notes = () => {
  const { notes } = useContext(State);
  return (
    <>
    <section className="mt-10 mb-5">
        <h3>Notes</h3>
        <p className="mt-2 lg:w-1/2 text-justify">{notes}</p>
      </section>
        </>
  )
}

export default Notes