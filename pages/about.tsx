import { NextPage } from "next";
import Profile from "@/components/Profile";

const About: NextPage = () => {
  return (
    <div className="mx-auto">
      <div className="overflow-hidden h-64 rounded-lg">
        <img
          alt="content"
          className="object-cover object-center w-full h-full"
          src="https://dummyimage.com/1200x500"
        />
      </div>
      <div className="flex flex-col mt-10 sm:flex-row">
        <div className="text-center sm:py-8 sm:pr-8 sm:w-1/3">
          <Profile />
        </div>
        <div className="pt-4 mt-4 text-center border-t border-gray-300 sm:py-8 sm:pl-8 sm:mt-0 sm:w-2/3 sm:text-left sm:border-t-0 sm:border-l">
          <p className="mb-4 text-lg leading-relaxed">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh
            mi umami everyday carry hexagon locavore direct trade art party.
            Locavore small batch listicle gastropub farm-to-table lumbersexual
            salvia messenger bag. Coloring book flannel truffaut craft beer
            drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90s scenester vexillologist forage post-ironic
            asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
            before they sold out four loko. 3 wolf moon brooklyn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
