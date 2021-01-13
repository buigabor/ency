import React from "react";
import SideBar from "../../components/sidebar/sidebar.component";
import RightBar from "../../components/right-bar/right-bar.component";
import getDate from "../../utils/getDate";
import AddButton from "../../components/add-button/add-button.component";
import ResearchCard from "../../components/research-card/research-card.component";

export default function Dashboard(): JSX.Element {
  console.log(getDate());
  return (
    <div className="bg-gray-200 flex justify-between h-screen overflow-y-hidden">
      <SideBar />
      <div className="block w-24"></div>
      <div className="p-8 px-12 w-full">
        <div className="text-md text-gray-500 mb-3">{getDate()}</div>
        <div className="text-3xl font-bold mb-8">
          Good Morning, Saptarshi!
          <div className="float-right">
            <AddButton />
          </div>
        </div>
        <div className="p-10 h-full max-h-4/5 overflow-auto bg-white rounded-xl w-full break-all pb-20">
          <ResearchCard
            title="World War 1"
            date="12th January,2021"
            description="A research about ww1"
          />
        </div>
      </div>
      <div className="block w-96 ml-10"></div>
      <RightBar />
    </div>
  );
}