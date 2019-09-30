import axios from "axios";

export default axios.create({
  baseURL: "http://test.onmiz.org:8080/v2/"
});
