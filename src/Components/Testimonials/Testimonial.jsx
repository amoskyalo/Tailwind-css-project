import React from "react";
import person1 from "../../Assets/avatar-anisha.png";
import person2 from "../../Assets/avatar-ali.png";
import person3 from "../../Assets/avatar-richard.png";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <div className="container flex flex-col space-y-6 mx-auto my-10 md:max-w-5xl">
        <h2 className="text-center text-xl font-bold md:text-4xl md:mb-8">What they've said</h2>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex flex-col bg-veryLightGray text-center items-center px-4">
            <img src={person1} alt="" className="-mt-4 h-10 w-10" />
            <h2 className="text-sm font-bold mx-2 text-center">Ali Bravo</h2>
            <p className="text-xs text-center">
              {" "}
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="flex flex-col bg-veryLightGray text-center items-center px-4">
            <img src={person2} alt="" className="-mt-4 h-10 w-10" />
            <h2 className="text-sm font-bold mx-2 text-center">Anisha Li</h2>
            <p className="text-xs text-center">
              {" "}
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="flex flex-col bg-veryLightGray text-center items-center px-4">
            <img src={person3} alt="" className="-mt-4 h-10 w-10" />
            <h2 className="text-sm font-bold mx-2 text-center">Richard Watts</h2>
            <p className="text-xs text-center">
              {" "}
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
