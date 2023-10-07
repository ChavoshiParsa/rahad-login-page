import { lang } from "@/types/context-types";
import { ChangeEvent, FocusEvent, useState } from "react";
import Icon from "./Icon";
import { useContextProvider } from "@/context/store";

const Input = (props: {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  value: string;
  touched?: boolean;
  errors?: string;
  iconName: string;
}) => {
  const { lang, langContent } = useContextProvider();
  const [isPassShown, setIsPassShown] = useState(false);
  const type = props.name === "password" && !isPassShown ? "password" : "text";
  const label =
    props.name === "password" ? langContent.password : langContent.username;
  const anyError = props.touched && props.errors;
  const placeholder =
    props.name === "username"
      ? langContent.usernameInputPlaceholder
      : langContent.passwordInputPlaceholder;

  return (
    <div className="flex w-full flex-col items-center justify-center md:mb-5">
      <label
        className="mx-2 text-base mb-2 text-[#294046]"
        htmlFor={props.name}
        style={{
          alignSelf: `${lang === "PR" || lang === "AQ" ? "end" : "start"}`,
        }}
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          dir={`${lang === "PR" || lang === "AQ" ? "rtl" : "ltr"}`}
          className="w-full rounded-[10px] border border-[#C2C7CC] bg-transparent px-5 py-4 outline-0 text-xs"
          style={{ borderColor: `${anyError ? "#FB2047" : "#C2C7CC"}` }}
          name={props.name}
          id={props.name}
          type={type}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          placeholder={placeholder}
        />
        <div
          className="absolute bottom-3"
          style={{
            left: `${lang === "PR" || lang === "AQ" ? "12px" : ""}`,
            right: `${lang === "PR" || lang === "AQ" ? "" : "12px"}`,
            cursor: `${props.name === "password" ? "pointer" : ""}`,
          }}
          onClick={() => {
            props.name === "password" ? setIsPassShown((prev) => !prev) : "";
          }}
        >
          <Icon name={props.iconName} size={24} />
        </div>
      </div>
      {anyError && (
        <p
          className="text-[10px] text-[#FB2047] mx-2 mt-1"
          style={{
            alignSelf: `${lang === "PR" || lang === "AQ" ? "end" : "start"}`,
          }}
        >
          {props.errors}
        </p>
      )}
    </div>
  );
};

export default Input;
