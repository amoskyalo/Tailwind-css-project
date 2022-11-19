import React from "react";

const Different = () => {
  return (
    <section id="difference">
      <div className="container flex flex-col justify-between my-10 px-6 mx-auto space-y-6 md:flex-row md:space-y-0 md:max-w-6xl">
        <div className="flex flex-col space-y-4 md:w-1/2">
          <h2 className="max-w-md font-bold text-3xl md:text-4xl">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-sm">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-2">
            <p className="bg-brightRed text-white py-2 px-3 max-h-10 rounded-3xl">
              01
            </p>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-bold">Track company-wide progress</h3>
              <p className="text-sm max-w-sm">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="bg-brightRed text-white py-2 px-3 max-h-10 rounded-3xl">
              02
            </p>
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold">Advanced built-in reports</h3>
              <p className="text-sm max-w-sm">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="bg-brightRed text-white py-2 px-3 max-h-10 rounded-3xl">
              03
            </p>
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold">
                Everything you need in one place
              </h3>
              <p className="text-sm max-w-sm">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
