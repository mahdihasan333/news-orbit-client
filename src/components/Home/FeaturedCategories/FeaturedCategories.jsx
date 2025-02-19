import { useContext, useState } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";

const categories = [
  { name: "Politics", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c", description: "Latest political news and updates." },
  { name: "Sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b", description: "All about sports and tournaments." },
  { name: "Entertainment", image: "https://images.unsplash.com/photo-1598899134739-24c36b3a6e2d", description: "Hollywood, Bollywood, and more." },
  { name: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475", description: "New gadgets, AI, and innovations." },
  { name: "Health", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef", description: "Stay fit with health news." },
];

const FeaturedCategories = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`w-11/12 mx-auto transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-blue-50 text-black"
    }`}>
      <div className="container mx-auto px-4 py-10">
        {/* Dark Mode Toggle Button */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="fixed top-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Featured Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Explore top news from different sections</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              style={{
                backgroundColor: darkMode ? '#2d2d2d' : 'white',
                color: darkMode ? 'white' : 'black',
              }}
            >
              <img src={category.image} alt={category.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{category.description}</p>
                <button className={`mt-4 px-5 py-2 rounded-lg transition-all 
                  ${darkMode ? 'bg-blue-500 hover:bg-blue-400' : 'bg-lime-500 hover:bg-lime-700'}
                `}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
