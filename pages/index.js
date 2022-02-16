import Link from "next/link";
import { Layout } from "../components/Layout";

const HomeButton = ({ label, link }) => {
  return (
    <Link href={link}>
      <a className="w-[80%] bg-flgreen h-[45px] flex justify-end text-5xl text-fblack font-medium my-3">
        {label}
      </a>
    </Link>
  );
};

export default function Home() {
  return (
    <Layout title={"Home"}>
      {" "}
      <div className=" h-[100%] flex items-center ">
        <div className="flex flex-col w-[100%]">
          <HomeButton label={"topic list"} link={"/topic-list"} />
          <HomeButton label={"random"} link={"/"} />
          <HomeButton label={"statistics"} link={"/"} />
          <HomeButton label={"syllabus"} link={"/"} />
          <HomeButton label={"profile"} link={"/"} />
          <HomeButton label={"logout"} link={"/"} />
        </div>
      </div>
    </Layout>
  );
}
