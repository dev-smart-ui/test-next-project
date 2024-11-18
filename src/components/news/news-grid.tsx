import {NewsCard} from "@/components/news/news-card";

type TNewsGrid = {
  data: TNewsCard[]
}

export type TNewsCard = {
  title: string,
  text: string
}
export const NewsGrid = ({data}: TNewsGrid) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
      {data?.map((item, index) => {
        return(
          <NewsCard key={index} title={item?.title} text={item?.text} />
        )
      })}
    </div>
  )
}
