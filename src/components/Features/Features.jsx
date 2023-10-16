import "/src/components/Features/Features.css";
import "/src/App.css";
import featuresImg from "/src/components/Features/features.png";

const Features = () => {
  return (
    <div>
      {/* flexbox basis */}
      <div className="flex flex-row cards">
        <div className=" basis-1/2">
          <span className="font-bold lg:text-2xl">90+</span>
          <br /> Users
        </div>
        <div className=" basis-1/2">
          <span className="font-bold lg:text-2xl"> 30+ </span>
          <br />
          Location
        </div>
        <div className=" basis-1/2">
          <span className="font-bold lg:text-2xl">50+</span> <br />
          Server
        </div>
      </div>

      <div className="features mx-10">
        <div className="lg:px-12 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
          {/* text here */}
          <div className="md:w-1/2 w-full ">
            <h1 className="text-5xl font-semibold  mb-7">
              We Provide Many Features You Can Use
            </h1>
            <p className="  text-gray mb-2 ml-2">
              You can explore the features that we provide with fun and <br />
              have their own fucntion each features
            </p>
            {/* list */}
            <div className=" mt-5 ml-2">
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 ">
                <li className="flex items-center ">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Powerful online protection
                </li>
                <li className="flex items-center ">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Internet without borders
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  No specific time limits
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Supercharged VPN
                </li>
              </ul>
            </div>
          </div>
          {/* img here */}
          <div className=" md:w-1/2 w-full ">
            <img src={featuresImg} alt="" className="w-full ml-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
