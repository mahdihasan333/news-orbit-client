const Slide = ({ image, text }) => {
  return (
    <div
      className="relative w-full h-[400px] lg:h-[600px] bg-center bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-semibold text-white lg:text-5xl">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slide;
