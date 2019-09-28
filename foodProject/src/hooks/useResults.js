import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  const searchApi = searchTerm => {
    yelp
      .get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      })
      .then(res => {
        const { businesses } = res.data;
        setResults(businesses);
      })
      .catch(err => {
        setErr("Something went wrong");
      });
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, err];
};
