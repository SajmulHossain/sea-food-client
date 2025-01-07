import { useEffect } from "react";


const useMenu = () => {
  
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }, [])
};

export default useMenu;