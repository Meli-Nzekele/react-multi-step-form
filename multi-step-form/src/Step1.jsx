import "./App.css";

const Step1 = ({ values, handleChange }) => {
  return (
    <form>
      <div className="fields">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Melissa"
          value={values.firstname}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        name="lastname"
        placeholder="Courtney"
        value={values.lastname}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="test@test.com"
        value={values.email}
        onChange={handleChange}
      />
    </form>
  );
};

export default Step1;
