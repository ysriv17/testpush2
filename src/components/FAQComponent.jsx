import { useState } from "react";

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Dial247.ai?",
      answer:
        "Dial247.AI is a NextGen AI-phone agent development company which has made AI to communicate on calls just like we humans do.It excels at mimicking human behavior, listening attentively, and responding with natural tonality and voice.This intelligent system is poised for a significant breakthrough, capable of handling a wide range of tasks.",
    },
    {
      question: "How it works",
      answer:
        "You share your specific needs with us, and we customize a bot to meet those requirements. Once set up, we can proceed with a pay-per-call or pay-per-conversation model. Let's talk!",
    },
    {
      question: "Why do I need it?",
      answer:
        "It automates the process of making calls to thousands, even millions, of people. This technology makes traditional call centers and manual calling unnecessary for tasks like inbound and outbound calls, appointment scheduling, candidate screening and so on. After each call, it provides detailed analysis tailored to your needs.",
    },
    {
      question: "In which geographies Dial247 can be used?",
      answer:
        "Dial247 can be used globally. It supports various regions and countries, making it versatile for international use.",
    },
    {
      question: "Can I create a phone agent that speaks non-English languages?",
      answer:
        "Yes, Dial247 supports multiple languages, allowing you to create phone agents that speak non-English languages.",
    },
    {
      question:
        "If I am not from a technical background, can I still use Dial247?",
      answer:
        "Absolutely! Dial247 is designed to be user-friendly and does not require a technical background to operate.",
    },
    {
      question: "For which functional use-cases, Dial247 can be used?",
      answer:
        "Dial247 can be used for customer support, sales calls, automated notifications, and many other use-cases that require automated phone interactions.",
    },
    {
      question: "How many phone calls can Dial247 handle at any given time?",
      answer:
        "Dial247 can handle a large number of concurrent calls, scaling according to your needs and the plan you select.",
    },
    {
      question: "Can I create a custom phone agent with my company’s data?",
      answer:
        "Yes, you can integrate your company's data to create custom phone agents tailored to your specific requirements.",
    },
    {
      question: "What’s the Dial247’s pricing?",
      answer:
        "Dial247 offers various pricing plans to suit different needs. Please visit our pricing page or contact our sales team for detailed information.",
    },
  ];

  return (
    <div
      className="p-6 md:p-10 container bg-white mx-auto py-8 mb-8 space-y-4 min-h-screen"
      id="faq"
    >
      <div className="flex flex-col ">
        <h2 className="text-4xl  font-Poppins md:text-6xl text-gray-800  font-bold text-center mb-6  fade-in-up fade-in-up fade-in-up-delay-3 ">
          Frequently Asked
        </h2>
        <h2 className="text-[#0388A7] text-4xl  font-Poppins md:text-6xl font-bold text-center mb-6 fade-in-up fade-in-up fade-in-up-delay-3">
          Questions
        </h2>
      </div>
      <div className="space-y-4 fade-in-up fade-in-up fade-in-up-delay-5">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 p-8 rounded-lg">
            <button
              className="w-full font-Poppins text-left text-lg font-medium text-[#0388A7]  flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-500 font-Poppins">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
