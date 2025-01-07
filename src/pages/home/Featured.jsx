import Heading from "../../components/Heading";
import featuredImg from "../../assets/home/featured.jpg";
import Button from "../../components/Button";


const Featured = () => {
  return (
    <div className="featuredImg bg-blend-overlay bg-gray-700 bg-opacity-50">
      <section>
        <Heading heading="From our menu" title="Check it out" />

        <div className="flex flex-col md:gap-10 md:flex-row md:justify-center md:items-center gap-4">
          <div>
            <img
              src={featuredImg}
              className="rounded-md"
              alt="featured image"
            />
          </div>
          <div className="text-white">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae vel eius est voluptate porro assumenda deserunt
              necessitatibus at eos recusandae quaerat asperiores ratione,
              aliquid blanditiis nostrum sequi enim in quasi quidem laborum cum
              consequuntur magnam. Est in labore animi voluptatum voluptatem
              laboriosam numquam provident, sapiente facere fuga autem impedit!
              Harum?
            </p>
            <Button color="white" name="Read More" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
