import "./App.css";

const Step3 = ({ values, handleChange }) => {
  return (
    <form>
      <div className="fields">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          min="1"
          value={values.age}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Step3;
