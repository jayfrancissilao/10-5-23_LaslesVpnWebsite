/* eslint-disable react/jsx-key */
import plans from "/src/Data/Plan.json";
import PlanImg1 from "/src/components/Plan/box.png";
import PlanImg2 from "/src/components/Plan/box.png";
import PlanImg3 from "/src/components/Plan/box.png";

import "/src/components/Plan/Plan.css";
const Plan = () => {
  const images = [PlanImg1, PlanImg2, PlanImg3];
  return (
    <div className="mx-12 plan">
      <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 md:w-11/12 mx-auto gap-10  ">
        {plans.map((plan, i) => {
          return (
            <div key={plan.id} className="  p-8 border-2 border-rose-500  ">
              <div>
                <div className="img-box">
                  <img src={images[i]} alt="" className="lg:w-40  " />
                </div>
                <h3 className="lg:text-2xl font-semibold mb-2 items-center ">
                  {plan.name}
                </h3>
                <h2 className="lg:text-2xl font-semibold description ">
                  {plan.description}
                </h2>
                <button className="btn-btn">Btn here</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
