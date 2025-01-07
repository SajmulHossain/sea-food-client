import Banner from "./Banner";
import Featured from "./Featured";
import Order from "./Order";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";


const Home = () => {
  return (
    <>
      <Banner />
      <Order />
      <PopularMenu />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;