import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default id => {
  const [list, setList] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const res = await yelp.get(`https://api.yelp.com/v3/businesses/${id}`);
        setList(res.data);
      } catch {
        console.log("some thing is wrong :)");
      }
      setIsFetching(false);
    })();
  }, []);

  return [list, isFetching];
};
