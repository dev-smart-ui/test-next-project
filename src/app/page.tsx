import {Heading} from "@/components/layout/heading";
import data from "@/data/home.json"
import {InfoCards} from "@/components/dashboard/infoCards";
import {Transactions} from "@/components/dashboard/transactions";
export default function Home() {
  return (
    <div className={``}>
      <Heading title={data?.title} description={data?.description}/>
      <InfoCards data={data?.info}/>
      <Transactions data={data?.transactions}/>
    </div>
  );
}
