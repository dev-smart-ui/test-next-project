import React from "react";

type TInfo = {
  data:{
    name: string,
    number: string
  }[]
}
export const InfoCards = ({data}: TInfo) => {
  return(
    <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 my-6`}>
      {data?.map((item, index) => {
        return (
          <div key={index}
            className="w-full block p-6 bg-slate-700 border border-slate-600 rounded-lg shadow">
            <h5 className="mb-2 text-lg font-normal tracking-tight text-gray-100">{item?.name}</h5>
            <p className="font-bold text-3xl text-violet-300">{item?.number}</p>
          </div>
        )
      })}
    </div>
  )
}
