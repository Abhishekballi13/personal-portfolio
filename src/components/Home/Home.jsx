import avatarImg from "../../assets/avatar.webp"
import TextChange from "../TextChange"

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
            <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter"><TextChange/></h1>
            <p className="text-sm mt-4 md:text-2xl leading-tight tracking-tight">To obtain a challenging position that best utilizes my skills & provides
opportunities to grow my technical and managerial skills, enabling me as
a fresh graduate to grow while fulfilling organizational goals</p>
            <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm  md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact me</button>
        </div>
        <div><img className="" src={avatarImg} alt=""/></div>
    </div>
  )
}

export default Home