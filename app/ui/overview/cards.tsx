import { FaIndianRupeeSign } from 'react-icons/fa6';
// import { useState, useEffect } from 'react';

export default function Cards({
  cardType,
  marketSummary,
}: {
  cardType: string;
  marketSummary: {
    totalBuyQty: number;
    totalSellQty: number;
    totalBuyVolume: number;
    totalSellVolume: number;
  };
}) {
  // const [units, setUnits] = useState<number>();
  // const [value, setValue] = useState<string>();

  // useEffect(() => {
  //   setUnits(Math.floor(Math.random() * 10000 + 170000));
  //   setValue((Math.random() + 41).toFixed(2));

  //   const interval = setInterval(() => {
  //     setUnits(Math.floor(Math.random() * 10000 + 170000));
  //     setValue((Math.random() + 41).toFixed(2));
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div
      key={cardType}
      className="my-2 flex h-auto w-auto flex-row items-start gap-3 self-stretch rounded-3xl px-4 py-2 shadow-md md:h-1/5"
    >
      <div className="text-primary text-sm overflow-hidden font-medium">
        <p>{cardType === 'bid' ? 'Total Buy Orders' : 'Total Sell Orders'}</p>
      </div>
      <div className="text-sm my-4 flex flex-col items-start justify-start self-stretch overflow-hidden font-medium ">
        <div
          className={`flex flex-row  justify-start ${
            cardType === 'bid' ? 'text-seagreen' : 'text-indianred'
          }`}
        >
          <div className="h-auto p-[2px]">
            <FaIndianRupeeSign />
          </div>
          {cardType === 'bid'
            ? (marketSummary.totalBuyVolume / 10000000).toFixed(2)
            : (marketSummary.totalSellVolume / 10000000).toFixed(2)}{' '}
          Cr
        </div>
        <div className="text-xs text-dimgray">
          {cardType === 'bid'
            ? marketSummary.totalBuyQty.toLocaleString('en-IN')
            : marketSummary.totalSellQty.toLocaleString('en-IN')}{' '}
          units
        </div>
      </div>
    </div>
  );
}
