import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import axios from "axios";

const Tours = () => {
  const URL = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then(function (response) {
        setTours(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {tours.map((item) => (
        <Tour item={item} />
      ))}
    </div>
  );
};

export default Tours;
