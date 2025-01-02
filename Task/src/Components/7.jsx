import { useState } from "react";

const Seven = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handlerChange = (event) =>
    setFormValue({ ...formValue, [event.target.name]: event.target.value });

  const handlerSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = validateForm(formValue);
    if (!isValid) return setErrors(errors);
    alert("Form submitted successfully");
    console.log(formValue);
    setFormValue({ name: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  const validateForm = ({ name, email, password, confirmPassword }) => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords don't match";
    return { isValid: Object.keys(errors).length === 0, errors };
  };

  const renderInput = (name, type, placeholder) => (
    <>
      {errors[name] && (
        <p className="text-red-600 text-sm font-semibold">{errors[name]}</p>
      )}
      <input
        className={`bg-transparent rounded-md border p-2 ${
          errors[name] ? "border-red-300" : ""
        }`}
        placeholder={placeholder}
        type={type}
        name={name}
        value={formValue[name]}
        onChange={handlerChange}
      />
    </>
  );

  return (
    <div className="border border-slate-400 p-5 rounded-lg">
      <h1 className="text-4xl underline mb-4">Form Handling</h1>
      <form
        onSubmit={handlerSubmit}
        className="flex items-center justify-center gap-2 flex-col"
      >
        {renderInput("name", "text", "Enter the Name")}
        {renderInput("email", "email", "Enter the Email")}
        {renderInput("password", "password", "Enter the Password")}
        {renderInput("confirmPassword", "password", "Re-Enter the Password")}
        <button
          className={`px-4 py-1 bg-blue-600 rounded-md cursor-pointer active:scale-95 font-semibold ${
            Object.keys(errors).length > 0 ? "opacity-50" : ""
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Seven;
