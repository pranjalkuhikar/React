import { useState } from "react";
import Cards from "./Cards";

const Form = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    img: "",
  });

  const [cardsData, setCardsData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCardsData([...cardsData, formValue]);
    setFormValue({ title: "", description: "", img: "" });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-wrap bg-zinc-800 rounded-xl w-fit p-5">
        <form
          onSubmit={submitHandler}
          className="flex items-center justify-center flex-wrap gap-10"
        >
          <input
            type="text"
            placeholder="Enter your Title"
            name="title"
            required
            value={formValue.title}
            onChange={handleChange}
            className="border-none rounded-lg px-7 py-2 bg-transparent text-white outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Description"
            required
            name="description"
            value={formValue.description}
            onChange={handleChange}
            className="border-none rounded-lg px-7 py-2 bg-transparent text-white outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Image Link"
            name="img"
            required
            value={formValue.img}
            onChange={handleChange}
            className="border-none rounded-lg px-7 py-2 bg-transparent text-white outline-none"
          />
          <button
            type="submit"
            className="border-none rounded-lg px-7 py-2 bg-white font-semibold active:scale-95"
          >
            Create User
          </button>
        </form>
      </div>
      <div className="mt-10 flex items-center justify-center flex-wrap gap-6">
        <Cards data={cardsData} setCardsData={setCardsData} />
      </div>
    </div>
  );
};

export default Form;
