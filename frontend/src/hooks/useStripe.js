import { useState } from "react";
import axios from "axios";
export default function useStripe() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    return axios
      .post("http://localhost:8000/payment", { ...body })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
      })
      .catch((error) => console.log(error));
  };

  return { product, makePayment, setProduct };
}
