import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  const handleNavigate = () => {
    setShowModal(false);
    navigate("/subscription");
  };

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-2xl shadow-2xl max-w-2xl w-full relative">
        <button
          className="absolute top-4 right-4 bg-white text-red-500 font-bold py-2 px-4 rounded-full hover:bg-gray-200"
          onClick={handleClose}
        >
          ×
        </button>
        <h2 className="text-4xl font-extrabold mb-6 text-center">
          Unlock Exclusive Features!
        </h2>
        <p className="mb-8 text-center text-xl">
          Subscribe now to access premium articles, exclusive insights, and
          personalized content tailored just for you.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-white text-blue-500 py-3 px-8 rounded-full font-bold text-lg hover:bg-gray-200 shadow-lg transition-transform transform hover:scale-105"
            onClick={handleNavigate}
          >
            View Subscription Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
