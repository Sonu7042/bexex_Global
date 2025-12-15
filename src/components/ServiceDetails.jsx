import React from "react";
import { useParams } from "react-router-dom";
import "../Css/serviceDetails.css";
// <<<<<<< HEAD
// import { data } from "../dataStore/serviceData.js";
// =======
// >>>>>>> 2c52875b3e4918498264026e4c9af7c758b736c3
import Service1 from "../components/services/Service1.jsx";

const ServiceDetails = () => {
  const { id } = useParams();

  return (
    <>
      <main className="px-4 md:px-16 lg:px-12">
        {id == 1 ? <Service1 /> : ""}
        {id == 2 ? <div style={{height:'100vh', display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px"}}>Under Construction</div> : ""}
        {id == 3 ?  <div style={{height:'100vh', display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px"}}>Under Construction</div>  : ""}
        {id == 4 ?  <div style={{height:'100vh', display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px"}}>Under Construction</div>  : ""}
        {id == 5 ?   <div style={{height:'100vh', display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px"}}>Under Construction</div>  : ""}
        {id == 6 ?  <div style={{height:'100vh', display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px"}}>Under Construction</div>  : ""}

      </main>
    </>
  );
};

export default ServiceDetails;
























// useEffect(() => {
//   if (id === "1") {
//     setContent("");
//   } else if (id === "2") {
//     setContent("Under Construction");
//   } else if (id === "3") {
//     setContent("Under Construction");
//   } else if (id === "4") {
//     setContent("Under Construction");
//   } else if (id === "5") {
//     setContent("Under Construction");
//   } else if(id==="6"){
//     setContent("Under Construction");
//   }
//   else{
//       setContent("Under Construction");
//   }
// }, [id]);

{
  /* <div className="flex justify-center items-center h-[80vh] flex-col gap-3 sm:gap-4">

      <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold animate-fade-up text-center">
        Coming Soon
      </h1>

      <p className="text-base sm:text-lg md:text-xl animate-fade text-center">
        Under Construction...
      </p>
</div> */
}

// {
//   data.map((item)=>
//     <div key={item.id}>
//       <img src={item.img} alt="" />
//       <p>{item.des}</p>
//     </div>

//   )
// }
