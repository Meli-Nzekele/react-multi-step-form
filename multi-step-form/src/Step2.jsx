import "./App.css";

const Step2 = ({ values, handleChange }) => {
  return (
    <form>
      <div className="fields">
        <label htmlFor=" addressLn1">Address Line 1</label>
        <input
          type="text"
          name=" addressLn1"
          value={values.addressLn1}
          onChange={handleChange}
        />
        <label htmlFor=" addressLn2">Address Line 2</label>
        <input
          type="text"
          name=" addressLn2"
          value={values.addressLn2}
          onChange={handleChange}
        />
        <label htmlFor="townCity">Town/City</label>
        <input
          type="text"
          name="townCity"
          value={values.townCity}
          onChange={handleChange}
        />
        <label htmlFor="postcode">Postcode</label>
        <input
          type="text"
          name="postcode"
          value={values.postcode}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Step2;
