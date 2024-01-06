import React from "react";
import Card from "./Card.jsx";

const AllCalls = ({ data, setData }) => {
  return (
    <div>
      <Card
        data={data.filter((el) => el.via)}
        setData={setData}
        archive={true}
      />
    </div>
  );
};

export default AllCalls;
