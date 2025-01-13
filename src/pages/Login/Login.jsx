import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
        <FcGoogle size={32} />

        <p>Continue with Google</p>
      </div>
      <p className="px-6 text-sm text-center text-gray-400">
        Don&apos;t have an account yet?{" "}
        <Link
          to="/signup"
          className="hover:underline hover:text-lime-500 text-gray-600"
        >
          Sign up
        </Link>
        .
      </p>
    </div>
  );
};

export default Login;
