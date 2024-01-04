import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/activities/`
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return [data];
};

export default useFetchData;
