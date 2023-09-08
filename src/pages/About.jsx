import React, { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/Config";
import QuestionComponent from "../Components/QuestionComponent";
import Swipper from "../Components/Swiper";

function About() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    projectFirestore.collection("team").onSnapshot((data) => {
      let result = [];
      if (!data.empty) {
        data.docs.map((item) => {
          result.push({ ...item.data(), id: item.id });
          setTeamMembers(result);
        });
      }
    });
    projectFirestore.collection("service").onSnapshot((data) => {
      let result = [];
      if (!data.empty) {
        data.docs.map((item) => {
          result.push({ ...item.data(), id: item.id });
          setService(result);
        });
      }
    });
  }, []);
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-start gap-[100px]">
      <div className="flex flex-col items-start w-[100%] gap-[80px]">
        <h1 className="text-[#49423D] text-[40px] font-bold">О сервисе</h1>
        <div className="flex w-[100%] justify-between h-[470px] items-start">
          <img src="" className="w-[590px] h-[100%] border-[2px]" />
          <Swipper
            data={service}
            space={100}
            additionallClass={'w-[530px] px-[10px] max-sm:w-[320px]'}
            cardClass={"w-[520px] flex flex-col gap-[30px] text-left"}
            h1Class={"text-[70px] font-bold text-[#8DB338]"}
            
          />
          {/* <div className="w-[520px] flex flex-col gap-[30px] text-left">
            <h1 className="">
              test
            </h1>
            <h1 className="text-[18px] text-[#49423D]">test</h1>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col items-start w-[100%] gap-[80px]">
        <h1 className="text-[#49423D] text-[40px] font-bold">Команда</h1>
        <div className="flex w-[100%] flex-wrap gap-[30px]">
          {teamMembers &&
            teamMembers.map((item) => {
              return (
                <div className="flex flex-col items-start w-[410px] gap-[30px] border-[2px]">
                  <img src={item.img} className="w-[100%] h-[410px]" />
                  <div className="flex flex-col items-start gap-[10px] p-[20px]">
                    <h1 className="text-[#49423D] text-[16px] font-semibold">
                      {item.name}
                    </h1>
                    <h1 className="text-[#909090] text-[14px] font-[400]">
                      {item.job}
                    </h1>
                    <h1 className="text-[#8DB338] text-[16px] font-bold">
                      {item.email}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
        <QuestionComponent />
      </div>
    </div>
  );
}

export default About;
