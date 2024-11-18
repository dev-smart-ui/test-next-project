import React, {FC} from "react";
import {TNewsCard} from "@/components/news/news-grid";
import Link from "next/link";

export const NewsCard: FC<TNewsCard> = ({title, text, id}) => {
  return (
    <article
      className="relative overflow-hidden w-full block p-6 bg-[linear-gradient(45deg,#475569,transparent)] border border-slate-600 transition-colors rounded-lg shadow hover:bg-violet-400">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">{title}</h5>
      <p className="font-normal text-gray-200">{text}</p>

      <Link href={`/news/${id}`} className={'absolute top-0 left-0 w-full h-full opacity-0'}/>
    </article>
  )
}
