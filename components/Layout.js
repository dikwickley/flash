import Link from "next/link";
import Head from "next/head";

export function Layout({ children, title = "This is the default title" }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="header">{/* <Nav /> */}</div>

      <div className="h-[100vh] main bg-fblack z-0 relative overflow-clip">
        <div className="h-[200px] w-[200px] bg-fred absolute rounded-full right-[-100px] top-[-100px]"></div>
        <div className="absolute right-0 z-10 text-red-50 h-[101vh] flex items-end text-5xl font-medium text-fred">
          GATE{" "}
          <span className="text-6xl">
            20<span className="text-white ">23</span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
