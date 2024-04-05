import { useContext } from "react";
import { State } from "../context/stateContext";

const MainDetails = () => {
  const {address} = useContext(State);
  return (
    <>
    <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-xl uppercase">Edu Enterprise</h2>
          <p>{address}</p>
        </section>
        </>
  )
}

export default MainDetails