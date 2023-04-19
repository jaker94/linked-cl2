import Image from "next/image";
import logo from '../assets/linkedin__logo.svg'
import landingLeft from '../assets/landing__left.svg'
import Headerlink from "../../components/Headerlink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";


function Home() {
  return (
    <div>
      <header className="flex justify-around items-center py-4 ">
        <div className="relative w-36 h-10 ">
        <Image
            src={logo}
            priority={1}
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
          <Headerlink Icon={ExploreIcon} text="Discover"/>
          <Headerlink Icon={GroupIcon} text="People" />
          <Headerlink Icon={OndemandVideoSharpIcon} text="Learning" />
          <Headerlink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
        </div>
        <div className="pl-4">
        <button className="text-blue-700 font-semibold rounded-full
        border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
          Sign in
        </button>
        </div>
      </header>
      <main className="flex flex-col xl:flex-row items-center
      max-w-screen-lg justify-around py-20">
        <div className="space-y-6 xl:space-y-10">
            <h1 className="text-3xl md:text-5xl text-amber-800/80
            max-w-xl !leading-snug pl-4 xl:pl-0">Welcome to your professional community</h1>
            <div className="space-y-4 sm:">
            <div className="intent"> 
            <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            </div>
            </div>
            <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-15 right-20 mt-10">
            <Image
            src={landingLeft}
            priority={1}
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
            </div>
      </main>
    </div>
  );
}

export default Home;
