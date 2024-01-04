import React from "react";
import Card from "./Card.jsx";

const AllCalls = ({ data,info,setInfo }) => {
  return (
    <div>
      <Card data={data.filter(el=>el.via)} archive={true}/>
    </div>
  );
};

export default AllCalls;
