import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <div className="w-1/2 relative">
            <img
              src={person}
              className="max-w-sm rounded-lg shadow-2xl w-3/4"
            />
            <img
              src={parts}
              className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute top-36 right-28 border-8 text-gray-700"
            />
          </div>
          <div className="w-1/2 space-y-4">
            <h2 className="font-bold text-xl text-red-500">About Us</h2>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don t look even
              slightly believable.
            </p>
            <p className="py-6">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don t look even slightly
              believable.
            </p>
            <button className="btn btn-error text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
