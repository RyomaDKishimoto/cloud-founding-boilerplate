import type { NextPage } from "next";
import Card from "@/components/Card";
import { GiftData } from "@/data/siteMetadata";

const MiddleContainer: NextPage = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 py-4 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 xl:pr-10 px-5">
        {/* <Discription /> */}
        <div className="flex flex-col justify-center py-14">
          <p className="mb-4 text-sm font-semibold  text-center text-teal-500 uppercase md:text-base sm:text-left">
            introducing
          </p>
          <h1 className="mb-5 text-2xl font-bold text-center text-gray-800 dark:text-white sm:text-left md:text-3xl">
            はじめに
          </h1>
          <p className="text-lg font-normal tracking-wider text-gray-600 dark:text-gray-400 mb-5">
            こんにちは、私たちは岡山県吉備中央町の、廃校を再活用した保護ねこ施設です。
            行き場を失った猫たちの引き受けと里親募集をしており、活動資金源として地元協力企業とのコラボでクラウドファンディングを毎月行っています。
          </p>
          <p className="mb-5 text-lg font-normal tracking-wider text-gray-600 dark:text-gray-400">
            「ティータイムに、贈り物に、おもたせとして外れ無し！」と岡山のスイーツ好きの人気を一身に集めている洋菓子店から、なんとまだ正式発売前の＼【絶品◎無添加】バームクーヘン／　をリターン品としてご用意しました。
          </p>
        </div>
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
