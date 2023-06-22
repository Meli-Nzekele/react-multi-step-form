import { useState } from "react";
import "./App.css";
import uxui from "../src/images/uxui.jpg";
import frontend from "../src/images/FrontEnd.jpg";
import backend from "../src/images/BackEnd.jpg";

const Step4 = ({ values, handleChange }) => {
  const [selectedJob, setSelectedJob] = useState("");
  const [transition, setTransition] = useState(null);

  const jobs = [
    { name: "UX/UI Designer", img: { uxui } },
    { name: "Frontend Developer", img: { frontend } },
    { name: "Backend Developer", img: { backend } },
  ];

  const handleSelect = (event) => {
    setTransition(true);
    setSelectedJob(jobs.find((job) => job.name === event.target.value));
    setTimeout(() => {
      setTransition(false);
    }, 100);
  };

  return (
    <div className="form-container">
      <form>
        <h2>Select your job</h2>
        {jobs.map((job) => {
          return (
            <div className="custom-radio" key={job.name}>
              <label htmlFor="job">
                <input
                  type="radio"
                  name="job"
                  value={job.name}
                  onChange={handleSelect}
                  checked={selectedJob && selectedJob.name === job.name}
                  className="custom-radio-input"
                />
                <span className="custom-radio-button"></span>
                {job.name}
              </label>
            </div>
          );
        })}
      </form>
      {selectedJob && (
        <div className="job-img">
          <img
            src={selectedJob.img}
            alt={selectedJob.name}
            className={transition ? "transit" : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Step4;
