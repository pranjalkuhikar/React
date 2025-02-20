/* eslint-disable react/prop-types */
const Cards = ({ data, setCardsData }) => {
  const remove = (idx) => {
    // Method 1
    // const updatedData = [...data];
    // updatedData.splice(id, 1);
    // setCardsData(updatedData);
    // Method 2
    setCardsData(data.filter((_, id) => id != idx));
    // Method 3
    // let newData = [];
    // for (let i = 0; i < data.length; i++) {
    //   if (i != idx) {
    //     newData.push(data[i]);
    //   }
    // }
    // setCardsData(newData);
  };
  return (
    <>
      {data.map((data, idx) => {
        return (
          <div
            key={idx}
            className="bg-zinc-400 relative p-4 rounded-lg h-fit w-60"
          >
            <div className="h-56 w-full">
              <img
                src={data.img}
                alt="Image"
                className="object-cover rounded-lg h-full w-full"
              />
            </div>
            <h2 className="text-white text-xl font-semibold text-center pt-5">
              {data.title}
            </h2>
            <p className="text-white text-sm text-center ">
              {data.description}
            </p>
            <div
              onClick={() => remove(idx)}
              className="absolute cursor-pointer right-0 top-0 translate-x-[50%] translate-y-[-50%] px-3 py-1 text-base bg-red-500 text-white rounded-full font-semibold "
            >
              X
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
