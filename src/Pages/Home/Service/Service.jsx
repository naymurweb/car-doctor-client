import { useEffect } from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-3 my-10">
        <h3 className="text-red-500 text-xl font-bold">Service</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don t look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 my-4">
        {
            services.map(item=><ItemCard service={item} key={item._id}/>)
        }

      </div>
    </div>
  );
};

export default Service;
