import React, { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/Config";
import {FiPlay} from "react-icons/fi"
import QuestionComponent from "../Components/QuestionComponent";
function FeedBacks() {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    projectFirestore.collection("feedback").onSnapshot((data) => {
      let result = [];
      if (!data.empty) {
        data.docs.forEach((item) => {
          result.push({ ...item.data(), id: item.id });
          setFeedback(result);
        });
      } else {
      }
    });
  }, []);
  return (
    <div className="w-[100%] flex flex-col items-center gap-[100px]">
      <div className="w-[100%] flex-col flex items-start gap-[30px]">
        <h1 className="text-[40px] font-bold text-[#49423D]">Отзывы</h1>
        <div className="flex gap-[30px]">
          <hr className="w-[2px] h-auto bg-[#8DB338]" />
          <h1 className="w-[830px] text-[16px] text-[#49423D] text-left">
            Ни для кого не секрет, что при выборе исполнителя люди нередко
            опираются на отзывы иных <br /> клиентов. Мы дорожим мнением каждого
            своего клиента. <br /> Нам важно отладить коммуникации
            между специалистами и клиентами по всей стране. Поэтому наши клиенты
            могут оставлять честные видео-отзывы. Они подчёркивают важную
            информацию, помогают остальным пользователям найти детальные ответы
            на интересующие их вопросы. Такие мнения помогают узнать реальную
            картину и лучше узнать исполнителя, предоставляемый им сервис,
            услуги и продукты.
          </h1>
        </div>
      </div>
      <div className="w-[100%] flex flex-wrap gap-[30px]">
        {feedback.map((item) => {
          return (
            <div class="flex flex-col relative items-start w-[234px] border-[2px] z-10 pb-[20px] group gap-[20px]">
              <button className="w-[80px] h-[80px] absolute z-50 top-[30%] left-[30%] bg-[#8DB338] hidden group-hover:flex justify-center items-center"><FiPlay className="w-[30px] h-[37px] text-white"/></button>
              <img
                src={item.img}
                class="w-[100%] h-[100%]  group hover:blur-[1px] hover:opacity-[50%]"
              />
              <ul class="flex flex-col items-start gap-[10px] pl-[30px]">
                <h1 class="text-[#49423D] text-[16[px] undefined">{item.h1}</h1>
                {item.text &&
                  item.text.map((item) => {
                    return (
                      <li class="text-[14px] text-[#909090] text-left">
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}
      </div>
      <QuestionComponent/>
    </div>
  );
}

export default FeedBacks;
