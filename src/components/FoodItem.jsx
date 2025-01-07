/* eslint-disable react/prop-types */


const FoodItem = ({food}) => {
  const {image, name, recipe, price} = food || {}
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img src={image} className="h-20 w-24 object-cover rounded-full rounded-tl-btn" alt="" />
      </div>
      <div className="flex justify-between w-full">
        <div>
          <p className="uppercase">{name}--------</p>
          <p className="text-sm">{recipe}</p>
        </div>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;