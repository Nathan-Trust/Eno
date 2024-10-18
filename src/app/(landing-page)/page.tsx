import { Eno_Routes } from "@/store/route";
import useMetaTagUpdater, { useTitleUpdater } from "@/utils/meta";
import HomeClient from "./client";

const Home = () => {
  // SEO MANAGEMENT
  useTitleUpdater({ [Eno_Routes.home]: "Eno" });
  useMetaTagUpdater({
    [Eno_Routes.home]: [
      { name: "description", content: "This is the home page description." },
      { name: "keywords", content: "home" },
    ],
  });
  return (
    <div>
      <HomeClient />
    </div>
  );
};

export default Home;
