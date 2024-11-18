import data from '@/data/news.json'
import {NewsGrid} from "@/components/news/news-grid";
import {Heading} from "@/components/layout/heading";
export default function News() {
  return (
    <>
      <Heading title={data?.title} description={data?.description} />
      <NewsGrid data={data?.cards} />
    </>
  );
}
