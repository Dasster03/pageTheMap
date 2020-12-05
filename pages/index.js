import Head from "next/head";
import Img from "../components/img";
import FormContac from "../components/contacForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Img />
      <FormContac/>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-content:"center";
          flex-wrap:wrap;
        }
       
      `}</style>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          
        }
      `}</style>
    </div>
  );
}
