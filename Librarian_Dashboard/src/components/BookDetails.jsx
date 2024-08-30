import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState([]);
  useEffect(() => {
    const getbookDetails = async () => {
      try {
        const response = await axios.get(
          `https://backend-mini-project-45cj.vercel.app/api/books/${id}`
        );
        setBookDetails(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getbookDetails();
  }, []);
  return <div>BookDetails is {id}</div>;
};

export default BookDetails;
