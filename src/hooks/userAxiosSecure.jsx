import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://news-orbit-server.vercel.app",
  withCredentials: true,
});

const userAxiosSecure = () => {
  return axiosSecure;
};

export default userAxiosSecure;
