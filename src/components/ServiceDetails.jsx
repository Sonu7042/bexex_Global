import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../Css/communities.css";
const ServiceDetails = () => {

  const value = useSelector((state) => state.counter.value1);


  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id === "1") {
      setContent("Under Construction");
    } else if (id === "2") {
      setContent("Under Construction");
    } else if (id === "3") {
      setContent("Under Construction");
    } else if (id === "4") {
      setContent("Under Construction");
    } else if (id === "5") {
      setContent("Under Construction");
    } else if(id==="6"){
      setContent("Under Construction");
    }
    else{
        setContent("Under Construction");
    }
  }, [id]);

  return(
  <>
  {/* {
    value.map((item)=>
      <div key={item.id}>
        <img src={item.img} alt="" />
        <p>{item.des}</p>
      </div>

    )
  } */}
   
  <div className="flex justify-center items-center h-[80vh] flex-col gap-3 sm:gap-4">

      <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold animate-fade-up text-center">
        Coming Soon
      </h1>

      <p className="text-base sm:text-lg md:text-xl animate-fade text-center">
        Under Construction...
      </p>

</div>

  </>     
  )
};

export default ServiceDetails;
