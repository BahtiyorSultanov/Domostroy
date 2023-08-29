import React from "react";
import QuestionMenu from "./QuestionMenu";
import Register from "./Register";

function QuestionComponent() {
  return (
    <div>
      <div className="flex flex-col items-start gap-[50px]">
        <h1 className="text-[40px] font-bold max-sm:text-[28px] max-sm:w-[223px] text-[#49423D] max-sm:text-left text-left">
          Частые вопросы
        </h1>
        <div className="flex items-start gap-[100px] w-[1290px] max-sm:w-[100%] max-sm:flex-col max-sm:items-center">
          <div className="flex flex-col items-start gap-[30px] max-sm:items-center">
            <QuestionMenu
              question={"Вопрос 1 ?"}
              menuInfo={<video src="" className="w-[730px] h-[400px]"></video>}
            />
            <QuestionMenu
              question={"Вопрос 1 ?"}
              menuInfo={<video src="" className="w-[730px] h-[400px]"></video>}
            />
            <QuestionMenu
              question={"Вопрос 1 ?"}
              menuInfo={<video src="" className="w-[730px] h-[400px]"></video>}
            />
          </div>
          <div className="flex flex-col items-start gap-[30px]">
            <div className="text-left max-sm:w-[200px]">
              <h1 className="text-[24px] text-[#49423D] font-[600] max-sm:my-[15px]">
                Не нашли нужный ответ?
              </h1>
              <h1 className="text-[16px] text-[#49423D] font-[500] max-sm:my-[15px]">
                Мы готовы ответить на любой ваш вопрос!
              </h1>
            </div>
            <Register bgclr={"#F5F5F6"} inpclr={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionComponent;
