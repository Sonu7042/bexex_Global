// components/ServiceDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  return <div>Service detail page for service #{id}</div>;
};


const NewsLetters = () => <div>Newsletters page</div>;

export { ServiceDetails, NewsLetters };
