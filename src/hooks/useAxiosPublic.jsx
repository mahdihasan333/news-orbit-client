import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://news-orbit-server.vercel.app",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
