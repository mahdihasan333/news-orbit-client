import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosPremium = axios.create({
  baseURL: "https://news-orbit-server.vercel.app",
  withCredentials: true,
});

const useAxiosPremium = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // request interceptor to add authorization header for every secure call to the api
  axiosPremium.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-premium-token");
      //   console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do Something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403
  axiosPremium.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      //   console.log("status error in the interceptor", status);
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosPremium;
};

export default useAxiosPremium;
