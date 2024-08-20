import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = function () {
    setIsOpen((is) => !is);
  };
  const handlePrevious = function () {
    if (step > 1) {
      // should always set the 1st variable as a callback function in order to avoid issue in future.
      setStep((s) => s - 1);
    }
  };
  const handleNext = function () {
    if (step < messages.length) {
      setStep((s) => s + 1);
    }
  };
  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
