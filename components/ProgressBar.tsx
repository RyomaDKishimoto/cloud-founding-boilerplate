import type { NextPage } from "next";
import { DonateType } from "./TopContainer";

const ProgressBar: NextPage<DonateType> = (donate) => {
  const achievementRate = (donate.amount / donate.goalAmount) * 100;
  return (
    <div className="relative pt-1">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="inline-block py-1 px-2 text-xs font-semibold tracking-wider text-orange-600 uppercase bg-orange-200 rounded-full">
            目標金額は{new Intl.NumberFormat("ja-JP").format(donate.goalAmount)}
            円
          </span>
        </div>
        <div className="text-right">
          <span className="inline-block text-xs font-semibold text-orange-600">
            {achievementRate}%
          </span>
        </div>
      </div>
      <div className="flex overflow-hidden mb-4 h-4 text-xs bg-orange-200 rounded-full">
        <div
          style={{ width: `${achievementRate}%` }}
          className="flex flex-col justify-center text-center text-white whitespace-nowrap bg-gradient-to-r from-yellow-400 to-orange-600 shadow-none"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
