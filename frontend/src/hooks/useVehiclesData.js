import { useEffect, useState } from "react";
import axios from "axios";

export default function useVehiclesData() {
  const [cars, setCars] = useState({});

  useEffect(() => {
    axios.get("/api/cars").then((res) => {
      console.log("res", res);
      res.data.forEach((car) => {
        const newCar = {};
        newCar[`${car.id}`] = car;
        setCars((prev) => ({ ...prev, ...newCar }));
      });
    });
  }, []);

  const getCarById = (id) => {
    return cars[`${id}`];
  };

  return { cars, getCarById };
}
