import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { ContextType } from "../context/CalcContext";

const useCont = () => {
    return useContext(CalcContext) as ContextType
}

export default useCont