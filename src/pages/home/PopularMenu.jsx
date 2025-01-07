import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import FoodItem from "../../components/FoodItem";
import Button from "../../components/Button";


const PopularMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
           const popularMenu = data.filter(menu => menu.category === 'popular')
           setMenus(popularMenu);
        });
    }, [])
  
  return (
    <section>
      <Heading heading="From Our Menu" title="Check it out" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {menus.map((menu) => (
          <FoodItem key={menu._id} food={menu} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button name='View Full Menu' color='black' />
      </div>
    </section>
  );
};

export default PopularMenu;