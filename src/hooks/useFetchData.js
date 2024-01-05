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
  }, []);

  return [data];
};

export default useFetchData;
