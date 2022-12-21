import axios from "axios";
import { useEffect, useState } from "react";
import Checkout from "../../components/Checkout/checkout";
import CheckoutEmpty from "../../components/Checkout/checkoutEmpty";

export default function ListProducts() {
  const [choiceFruit, setChoiceFruit] = useState();
  const url =
    "https://api-de-frutas-default-rtdb.firebaseio.com/frutas/checkout.json";

  useEffect(() => {
    axios.get(url).then((response) => {
      setChoiceFruit(Object.entries(response.data));
    });
    return choiceFruit;
  }, []);  

  return (
    <>
      {choiceFruit !== undefined? <Checkout choiceFruit={choiceFruit}/>: <CheckoutEmpty/>}
    </>
  );
}
