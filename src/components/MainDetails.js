import { useContext } from "react";
import { State } from "../context/stateContext";

const MainDetails = () => {
  const { name, address } = useContext(State);
  return (
    <>
    <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-xl uppercase">{name}</h2>
          <p>{address}</p>
        </section>
        </>
  )
}

export default MainDetails