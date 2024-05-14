
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[25px]">
      <div className="top">
        <img className="menu w-5 block ml-2.5 cursor-pointer" src={assets.menu_icon} alt="" />
        <div className="new-chat mt-[50px] inline-flex items-center gap-2.5 py-2.5 px-[15px] bg-[#e6eaf1] text-[14px] text-gray-500 cursor-pointer rounded-[50px]">
          <img className="w-5" src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>
        <div className="recent flex flex-col">
          <p className="recent-title mt-[30px] ">Recent</p>
          <div className="recent-entry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img className="w-5" src={assets.message_icon} alt="" />
            <p>What is react ...</p>
          </div>
        </div>
      </div>
      <div className="bottom flex flex-col">
        <div className="bottom-item recent-entry flex items-start gap-2.5 p-2.5 pr-2.5 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry flex items-start gap-2.5 p-2.5 pr-2.5 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.history_icon} alt="" />
          <p>Activities</p>
        </div>
        <div className="bottom-item recent-entry flex items-start gap-2.5 p-2.5 pr-2.5 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
