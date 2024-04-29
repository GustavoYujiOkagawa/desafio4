import ContentResults from "@/components/ContentResults";
import ContentState from "@/components/ContentState";

export default function Home() {
  return (
    <main className=" md:h-screen md:w-screen flex xs:flex-col justify-center items-center md:relative static">
        <ContentResults style={{zIndex:2}}/>
        <ContentState style={{zIndex:1}}/>
    </main>
  );
}
