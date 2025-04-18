import { useState } from "react";

const QuestionAnswer = () => {
  const questions = [
    {
      question: "What documents do I need for travel?",
      answer: "You will need your passport, visa (if required), and any travel permits if applicable.",
    },
    {
      question: "Can I cancel my booking and get a refund?",
      answer: "Yes, you can cancel your booking up to 7 days before departure and receive a full refund.",
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! Groups of 5 or more people receive a special discount. Please contact our team for details.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 " id="questions">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Questions <span className="text-amber-400">& Answers</span>
        </h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="p-5 transition border-2 cursor-pointer rounded-xl border-amber-400"
              onClick={() => toggle(index)}
            >
              <h3 className="flex items-center justify-between text-lg font-semibold">
                {item.question}
                <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
              </h3>
              {activeIndex === index && (
                <p className="mt-2 ">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionAnswer;
