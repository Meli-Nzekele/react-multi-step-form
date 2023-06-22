import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import "./App.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    addressLn1: "",
    addressLn2: "",
    townCity: "",
    postcode: "",
    age: "",
    job: "",
  });
  //   const [transition, setTransition] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values, "values");
  };

  const nextStep = (side) => {
    // setTransition(side);
    setTimeout(() => {
      setStep(step + 1);
      //   setTransition("");
    }, 100);
  };

  const previousStep = (side) => {
    // setTransition(side);
    setTimeout(() => {
      setStep(step - 1);
      //   setTransition("");
    }, 100);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 values={values} handleChange={handleChange} />;
      case 2:
        return <Step2 values={values} handleChange={handleChange} />;
      case 3:
        return <Step3 values={values} handleChange={handleChange} />;
      case 4:
        return <Step4 values={values} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  const reset = () => {
    setStep(1);
    setValues({
      firstname: "",
      lastname: "",
      address: "",
      age: "",
      job: "",
    });
    // setTransition("");
    setSubmitted(false);
  };

  return (
    <>
      {submitted ? (
        <div>
          <h1>Form Submitted!</h1>
          <div className="btncontainer">
            <button onClick={reset} className="reset">
              reset
            </button>
          </div>
        </div>
      ) : (
        <div className={"container"}>
          {renderStep()}
          <div className="btncontainer">
            {step > 1 && (
              <button onClick={() => previousStep("animate-left")}>
                Previous
              </button>
            )}
            {step < 4 && (
              <button onClick={() => nextStep("animate-right")}>Next</button>
            )}
            {step === 4 && <button onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;
