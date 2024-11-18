import React from "react";

type TTransaction = {
  data: {
    type: "Buy" | "Sell" | string,
    coin: string,
    time: string,
    value: string,
    amount: string
  }[]
}

export const Transactions = ({data}: TTransaction) => {
  return (
    <div className={`bg-slate-700 border border-slate-600 rounded-lg shadow my-6`}>
      <h5
        className={`mb-2 text-lg font-normal tracking-tight text-gray-100 py-3 px-6 border-b border-slate-600`}>{'Transactions'}</h5>
      <div className={`p-3`}>
        <table className="table w-full">
          <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td className="p-3">
                  <div className="flex gap-6 items-center">
                    <div className={item?.type === 'Buy' ? 'text-green-500' : 'text-red-500'}>
                      <svg width={15} height={15}>
                        <use href={item?.type === 'Buy' ? '#arrow-down' : '#arrow-up'}/>
                      </svg>
                    </div>
                    <div>
                      <h5
                        className="mb-1 text-md font-bold text-gray-700 dark:text-gray-100">{item?.type} {item?.coin}</h5>
                      <p className="mb-0 text-sm text-zinc-100 whitespace-nowrap">{item?.time}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-end">
                    <h5 className="mb-0 text-md font-bold text-gray-100 whitespace-nowrap">{item?.value}</h5>
                    <p className="mb-0 text-sm text-zinc-100 whitespace-nowrap">Coin Value</p>
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-end">
                    <h5 className="mb-0 text-md font-bold text-zinc-100">{item?.amount}</h5>
                    <p className="mb-0 text-sm text-zinc-100 whitespace-nowrap">Amount</p>
                  </div>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
