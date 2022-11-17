import React from "react";
import ReturnButton from "./ReturnButton";
import NoService from "./NoService";

export default function Service({ service, returnLink }) {
  if (!service?.id) return <NoService />;
  
  return (
    <>
      <div className="service" >
        <span>{service.name}</span>
        <span>{service.price}</span>
        <span>{service.content}</span>
      </div>
      <ReturnButton returnLink={returnLink} />
    </>
  );
};