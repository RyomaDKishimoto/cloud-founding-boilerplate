import type { NextPage } from "next";
import Card from "@/components/Card";
import { GiftData } from "@/data/siteMetadata";

const MiddleContainer: NextPage = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 py-4 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4">
        {/* <Discription /> */}
      </div>
      <div className="col-span-6 py-4 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <h1 className="mt-6 mb-3 text-2xl font-medium tracking-wider text-gray-600 dark:text-white">
          リターンを選ぶ
        </h1>
        {GiftData.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            price={d.price}
            description={d.description}
            imgSrc={d.imgSrc}
            apiId={d.apiId}
          />
        ))}
      </div>
    </div>
  );
};

export default MiddleContainer;
