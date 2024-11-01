import { useContext } from "react";
import { myContext } from "../../assets/context/MyContext/MyContext";

export const useMyContext = () => {
  const context = useContext(myContext);
  if (context === undefined) {
    throw new Error("must be used within a provider");
  }

  return context;
};
