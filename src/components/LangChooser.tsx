"use client";

import { useContextProvider } from "@/context/store";
import { useState } from "react";
import Icon from "./UI/Icon";
import { lang } from "@/types/context-types";

const LangChooser = () => {
  const { lang } = useContextProvider();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center absolute top-6 right-6 cursor-pointer z-10">
      <div
        className="flex flex-col pr-3 pl-2.5 py-3.5 border-[#AAAAAA] border"
        style={{
          borderRadius: `${isOpen ? "8px 8px 0 0 " : "8px"}`,
        }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className="flex justify-center items-center space-x-3 ">
          <Icon name="world" size={24} />
          <div className="font-medium -mb-0.5">{lang}</div>
        </div>
      </div>

      <div
        className="flex flex-col space-y-1 border-[#AAAAAA] border py-1 px-0.5"
        style={{
          display: `${isOpen ? "block" : "none"}`,
          borderRadius: `${isOpen ? "0 0 8px 8px" : "8px"}`,
        }}
      >
        <LangItem lang="PR" setIsOpen={setIsOpen} />
        <LangItem lang="EN" setIsOpen={setIsOpen} />
        <LangItem lang="TR" setIsOpen={setIsOpen} />
        <LangItem lang="AQ" setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const LangItem = (props: {
  lang: lang;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { lang, setLang } = useContextProvider();
  const iconName = props.lang.toLowerCase();
  return (
    <div
      className={`${
        lang === props.lang && "selectedLang"
      } flex justify-center items-center space-x-2.5 py-2.5 pl-3.5 pr-2 relative bg-transparent`}
      onClick={() => {
        setLang(props.lang);
        props.setIsOpen(false);
      }}
    >
      <div
        className="absolute h-[25px] border-[#2A8947] border-2 w-0 left-1 rounded"
        style={{ display: `${lang === props.lang ? "block" : "none"}` }}
      />
      <Icon name={`${iconName}-flag`} size={15} />
      <span className="-mb-0.5 text-xs bg-transparent">{props.lang}</span>
    </div>
  );
};

export default LangChooser;
