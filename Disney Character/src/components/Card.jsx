/* eslint-disable react/prop-types */

const Card = ({ data, id, togglePopup }) => {
  const Popup = () => {
    togglePopup(id);
  };

  return (
    <>
      <div
        style={{
          background: `linear-gradient(to top right, ${data.color1}, ${data.color2})`,
        }}
        className="h-64 cursor-pointer w-72 group hover:scale-110 rounded-[3em] transition-all relative duration-500 flex items-start justify-end flex-col gap-1 p-10"
        onClick={Popup}
      >
        <div
          style={{ color: `${data.text}` }}
          className="text-[2.5em] font-bold text-orange-400"
        >
          {data.name}
        </div>
        <div className="text-white font-light text-lg">
          Movie <span className="font-semibold">{data.movie}</span>
        </div>
        <div className="absolute -top-28 left-0 translate-x-[1%]  w-full h-full group-hover:scale-125 transition-all duration-300">
          <img src={data.img} alt="" className="object-cover h-full w-fit" />
        </div>
      </div>
    </>
  );
};

export default Card;
