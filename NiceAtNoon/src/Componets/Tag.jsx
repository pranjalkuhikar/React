/* eslint-disable react/prop-types */
const Tag = ({ text }) => {
  return (
    <div className="min-w-fit rounded-lg border bg-gray-400 px-3 py-1 text-sm text-white md:px-4">
      {text}
    </div>
  );
};

export default Tag;
