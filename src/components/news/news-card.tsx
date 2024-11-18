import React, {FC} from "react";
import {TNewsCard} from "@/components/news/news-grid";

export const NewsCard: FC<TNewsCard> = ({title, text}) => {
  return (
    <article
      className="w-full block p-6 bg-[linear-gradient(45deg,#475569,transparent)] border border-slate-600 transition-colors rounded-lg shadow hover:bg-violet-400">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">{title}</h5>
      <p className="font-normal text-gray-200">{text}</p>
    </article>
  )
}
