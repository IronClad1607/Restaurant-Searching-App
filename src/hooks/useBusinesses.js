import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (term) => {
    console.log("Hi There");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setError("");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  //   searchApi('pasta');

  useEffect(() => {
    console.log("first time");
    searchApi("pasta");
  }, []);

  return [searchApi, results, error];
};
