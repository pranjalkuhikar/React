import { X } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    company: "",
    number: "",
  });
  const [fav, setFav] = useState(false);
  const [card, setCard] = useState([]);
  const handlerChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  const handleFavoriteChange = (e) => setFav(e.target.checked);
  const handlerSubmit = (event) => {
    event.preventDefault();
    setCard([...card, { ...formValue, favorite: fav }]);
    setFormValue({
      name: "",
      company: "",
      number: "",
    });
    setFav(false);
  };
  const handleDelete = (index) => {
    setCard(card.filter((_, i) => i !== index));
  };
  return (
    <div className="h-screen w-screen bg-zinc-800 p-10 flex items-stretch gap-6 justify-center">
      {/* Form */}
      <div className="p-8 border w-1/2 border-stone-400 rounded-lg text-white">
        <h2 className="text-4xl tracking-tighter font-semibold underline">
          Add Contact
        </h2>
        <form onSubmit={handlerSubmit}>
          <div className="flex flex-col items-start space-y-4 py-4">
            <label className="flex items-center space-x-1">
              <span className="text-zinc-100">Name</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formValue.name}
              onChange={handlerChange}
              className="border border-gray-300 rounded-md bg-transparent w-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col items-start space-y-4 py-4">
            <label className="flex items-center space-x-1">
              <span className="text-zinc-100">Company</span>
            </label>
            <input
              type="text"
              name="company"
              value={formValue.company}
              onChange={handlerChange}
              className="border border-gray-300 rounded-md bg-transparent w-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Company Name"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 py-4">
            <label className="flex items-center space-x-1">
              <span className="text-zinc-100">Phone</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="number"
              value={formValue.number}
              onChange={handlerChange}
              className="border border-gray-300 rounded-md bg-transparent w-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Number"
              required
            />
          </div>
          <div className="flex items-center gap-4 py-4">
            <input
              type="checkbox"
              name="favorite"
              checked={fav}
              onChange={handleFavoriteChange}
            />
            <label className="flex items-center space-x-1">
              <span className="text-zinc-100">Favorite</span>
            </label>
          </div>
          <button className="bg-blue-600 w-full py-3 rounded-lg font-semibold">
            Add Contact
          </button>
        </form>
      </div>
      {/* Card Rendering */}
      <div className="p-8 border w-1/2 border-stone-400 rounded-lg text-white">
        <h2 className="text-4xl tracking-tighter font-semibold underline">
          Contact List
        </h2>
        {card.length > 0 ? (
          card.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col w-full items-start space-y-2 p-4 border mt-6 border-stone-400 rounded-lg text-white"
            >
              <div className="flex items-start justify-between h-full w-full space-y-2">
                <div className="space-y-2">
                  <h1 className="text-3xl">{card.name}</h1>
                  <h2 className="font-semibold text-sm text-stone-400">
                    {card.company ? card.company : "NA"}
                  </h2>
                  <h3 className="font-semibold text-sm text-stone-400">
                    {card.number}
                  </h3>
                  {card.favorite && (
                    <div className="px-4 py-1 rounded-xl font-semibold w-fit bg-yellow-500">
                      {card.favorite ? "Favorite" : ""}
                    </div>
                  )}
                </div>
                <div
                  onClick={() => handleDelete(idx)}
                  className="bg-red-500 rounded-full p-1"
                >
                  <X />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-10 text-stone-400 text-xl">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Form;
