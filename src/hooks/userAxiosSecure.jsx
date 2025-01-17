import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const userAxiosSecure = () => {
  return axiosSecure;
};

export default userAxiosSecure;
