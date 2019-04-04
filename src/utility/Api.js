import Axios from "axios";

const Endpoint = Axios.create({
  baseURL: "https://reqres.in/api/",
  timeout: 10000,
  headers: {}
});

export default Endpoint;
