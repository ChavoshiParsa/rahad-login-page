"use client";

import LangChooser from "@/components/LangChooser";
import { useContextProvider } from "@/context/store";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function Home() {
  const { langContent } = useContextProvider();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(langContent.usernameOrPassError),
      password: Yup.string().required(langContent.usernameOrPassError),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="relative w-full h-full">
      <LangChooser />
      <div className="flex flex-col items-center">
        <h1 className="text-[#2393B0] font-['Poppins'] text-6xl mt-32 font-medium">
          RAHAD
        </h1>
        <p className="font-medium">{langContent.title}</p>
        <form className="" onSubmit={formik.handleSubmit}>
          <input
            className=""
            placeholder={langContent.usernameInputPlaceholder}
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            required
          />
          <input
            className=""
            placeholder={langContent.passwordInputPlaceholder}
            name="password"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />
          <Link className="" href={"#"}>
            {langContent.forgettingPass}
          </Link>
          <button type="submit">{langContent.enterButton}</button>
        </form>
      </div>
    </div>
  );
}
