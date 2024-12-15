/* eslint-disable react/prop-types */
const Cards = ({ data }) => {
  return (
    <>
      {data.map((data, idx) => {
        return (
          <div key={idx} className="bg-zinc-400  p-4 rounded-lg h-fit w-60">
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
          </div>
        );
      })}
    </>
  );
};

export default Cards;
