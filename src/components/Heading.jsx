/* eslint-disable react/prop-types */

const Heading = ({ title, heading }) => {
  return (
    <div className="flex flex-col items-center my-6">
      {title && <p className="text-yellow-500 italic">---{title}---</p>}
      {heading && <h3 className="border-y py-2 my-3 uppercase px-10 font-bold">{heading}</h3>}
    </div>
  );
};

export default Heading;
