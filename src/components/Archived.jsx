import React from "react";
import Card from "./Card.jsx";

const Archived = ({ data, setData }) => {
  return (
    <div>
      <Card
        data={data.filter((el) => el.via)}
        archive={false}
        setData={setData}
      />
    </div>
  );
};

export default Archived;
