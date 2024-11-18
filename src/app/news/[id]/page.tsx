import newsData from "@/data/news.json";
import Link from "next/link";
import {Heading} from "@/components/layout/heading";

export const generateStaticParams = async () => {
  return newsData.cards.map((card) => ({
    id: card.id,
  }));
};

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> })  {
  const id = (await params).id;
  const newsItem = newsData.cards.find((card) => card.id === id);
  if (!newsItem) return false
  return (
    <div>
      <div className="py-3">
        <Link href={"/news"} className="flex items-center gap-3 link">
          <svg width={15} height={15} className="-rotate-90">
            <use href="#arrow-up"/>
          </svg>
          Back to News
        </Link>
      </div>
      <Heading title={newsItem.title}/>
      <div>{newsItem.text}</div>
    </div>
  );
}
