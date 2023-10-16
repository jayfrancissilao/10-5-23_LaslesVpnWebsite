import homeImg from "/src/components/Home/homeImg.png";
import "/src/components/Home/Home.css";
const Home = () => {
  return (
    <div className="mt-20 ">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        {/* image here */}
        <div className="md:w-1/2 w-full">
          <img src={homeImg} alt="" className="w-full" />
        </div>
        {/* text here */}
        <div className="md:w-1/2 w-full mt-5">
          <h3 className="font-semibold text-5xl">
            Want anything to be <br /> easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h3>
          <p className="mt-5 ml-2 text-gray">
            Provide a network for all your needs with ease and fun using
            laslesVPN <br />
            discover interesting features from us.
          </p>
          <button className="ml-2 mt-10 font-bold btn-btn ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
