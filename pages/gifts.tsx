import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import HorizontalCard from "@/components/HorizontalCard";
import PaymentForm from "@/components/PaymentForm";
import SubTotal from "@/components/SubTotal";
import { GiftData, GiftType } from "@/data/siteMetadata";

const Gifts: NextPage = () => {
  const router = useRouter();
  const [selectedReturns, setSelectedReturns] = useState<GiftType[]>(
    GiftData.map((r) => {
      if (r.apiId === router.query.item) {
        r.selected = true;
        return r;
      }
      r.selected = false;
      return r;
    })
  );
  const total = selectedReturns
    .map((item) => (item.selected ? item.price * item.quantity : 0))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div>
      <p className="text-xl tracking-wider text-center text-gray-500 dark:text-gray-300">
        Choose your return
      </p>

      <h1 className="mt-4 mb-12 text-3xl font-semibold tracking-wider text-center text-gray-600 dark:text-white capitalize">
        リターンを選択してください
      </h1>
      <div className="grid grid-cols-6">
        <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4">
          {selectedReturns.map((d) => (
            <HorizontalCard
              key={d.title}
              title={d.title}
              price={d.price}
              description={d.description}
              imgSrc={d.imgSrc}
              apiId={d.apiId}
              selected={d.selected}
              onSelect={setSelectedReturns}
            />
          ))}
        </div>
        <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
          <PaymentForm
            selectedItems={selectedReturns}
            onSelect={setSelectedReturns}
          />
          <SubTotal totalAmount={total} selectedItems={selectedReturns} />
        </div>
      </div>
    </div>
  );
};

export default Gifts;
