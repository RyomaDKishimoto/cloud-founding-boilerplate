import type { NextPage } from "next";
import { useEffect, useState } from "react";
import InstagramBtn from "../components/social-icons/InstagramBtn";
import LineBtn from "../components/social-icons/LineBtn";
import Profile from "./Profile";
import ProgressBar from "./ProgressBar";
import FacebookBtn from "./social-icons/FaceBookBtn";
import TwitterBtn from "./social-icons/TwitterBtn";

export type DonateType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  goalAmount: number;
};

const TopSection: NextPage = () => {
  const [loadDonate, setLoadDonate] = useState(true);
  const [donate, setDonate] = useState<DonateType>({
    id: 1,
    createdAt: new Date("2022-04-13T13:52:05.485Z"),
    updatedAt: new Date("2022-04-13T13:51:22.104Z"),
    amount: 0,
    goalAmount: 0,
  });

  useEffect(() => {
    async function load() {
      if (!loadDonate) {
        return;
      }
      const donate = await fetch("../netlify/functions/donate").then((res) =>
        res.json()
      );
      setDonate(donate);
      setLoadDonate(false);
    }
    load();
    console.log(donate);
  }, [loadDonate]);

  return (
    <>
      <h1 className="mt-4 mb-6 text-3xl font-medium tracking-wider text-center text-gray-600 dark:text-white capitalize lg:text-4xl">
        【ベガルタ仙台】カントリーロードリニューアルプロジェクト
      </h1>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4">
          <div className="overflow-hidden rounded">
            <img
              className="w-full"
              src="/static/images/google.png"
              alt="Sunset in the mountains"
            />
            <div className="py-4 px-6">
              <div className="mb-2 text-xl font-normal tracking-wider text-gray-600 dark:text-gray-400">
                カントリーロードは、クラブの記録を長く残していくことを目的として、チーム名がベガルタ仙台に変わった1999年から発行を重ねてまいりました。しかし、ここ数年の販売部数減少により、採算が厳しい現状を受け、クラウドファンディングによるプロジェクトを起案いたしました。ぜひご協力をお願いいたします。
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-4 px-6">
              <div className="col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1">
                <FacebookBtn />
              </div>
              <div className="col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1">
                <TwitterBtn />
              </div>
              <div className="col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1">
                <InstagramBtn />
              </div>
              <div className="col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1">
                <LineBtn />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2">
          <div className="p-6 w-full sm:p-4">
            <div className="first-line:font-normal tracking-wider leading-relaxed text-gray-600 dark:text-white">
              現在の支援総額
            </div>
            <h5 className="mb-4 text-5xl font-medium text-gray-900 dark:text-white">
              {donate.amount}円
            </h5>
            <ProgressBar {...donate} />
          </div>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default TopSection;
