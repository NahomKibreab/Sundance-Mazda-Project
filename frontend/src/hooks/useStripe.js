import { useState } from "react";
import axios from "axios";
export default function useStripe() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook",
  });

  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState(null);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    setEmail(token.email);

    return axios
      .post("http://localhost:8000/payment", { ...body })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
        confirmed(status);
      })
      .catch((error) => console.log(error));
  };

  const confirmed = (status) => {
    if (status === 200) {
      setStatus(status);
    }
  };

  return { product, makePayment, setProduct, status, email };
}
