import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";

const Questions = () => {
  const { theme } = useContext(ThemeContext);
  const faqData = [
    {
      question: "What is this platform about?",
      answer:
        "This platform is a full-stack Newspaper website designed for news aggregation, premium subscriptions, and dynamic article management.",
    },
    {
      question: "How do I register for an account?",
      answer:
        "Click on the 'Register' button, fill in your details, and verify your email. Ensure your password meets security requirements.",
    },
    {
      question: "What are the subscription plans?",
      answer:
        "We offer different subscription plans, including free and premium options. Premium users get access to exclusive articles and features.",
    },
    {
      question: "How can I post an article?",
      answer:
        "Users can submit articles via the 'Add Articles' section. Articles need admin approval before being published.",
    },
    {
      question: "What happens if my article is declined?",
      answer:
        "If your article is declined, you can view the reason provided by the admin and make necessary modifications for resubmission.",
    },
    {
      question: "How do I become an admin?",
      answer:
        "Only existing admins can grant admin privileges. If eligible, request an upgrade through the support section.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use JWT authentication and secure database management to ensure user data protection.",
    },
    {
      question: "Can I access premium articles without a subscription?",
      answer:
        "No, premium articles are exclusive to subscribed users. You can upgrade your account to access them.",
    },
  ];

  return (
    <div
      className={`w-11/12 mx-auto py-16 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center space-y-5 mb-12">
        <h1 className="text-5xl font-extrabold">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find answers to the most common questions about our platform
        </p>
      </div>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md"
          >
            <details className="group">
              <summary className="flex justify-between items-center text-xl font-semibold cursor-pointer">
                {faq.question}
                <span className="text-gray-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
