import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What documents do I need to travel?",
      answer: "You’ll need your passport, visa (if applicable), and any required travel permits."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel within 7 days before your departure and receive a full refund."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! Groups of 5 or more receive a special discount. Contact our team for details."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 " id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 ">Frequently <span className="text-amber-400">Asked Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" border border-gray-400 rounded-xl shadow-sm p-5 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg font-semibold  flex justify-between items-center">
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </h3>
              {activeIndex === index && (
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
