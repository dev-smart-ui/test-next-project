import {newsData} from '@/data/news'
import {NewsGrid} from "@/components/news/news-grid";
import {Heading} from "@/components/layout/heading";
export default function News() {
  return (
    <>
      <Heading title={'News'} />
      <NewsGrid data={newsData} />
    </>
  );
}
