"use client";

import LangChooser from "@/components/LangChooser";
import { useContextProvider } from "@/context/store";

import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import Input from "@/components/UI/Input";

export default function Home() {
  const { lang, langContent } = useContextProvider();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(langContent.usernameOrPassError),
      password: Yup.string().required(langContent.usernameOrPassError),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="relative w-full h-full">
      <LangChooser />
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[#2393B0] font-['Poppins'] text-6xl mt-28 font-medium">
          RAHAD
        </h1>
        <p className="font-medium mt-14 text-[#294046]">{langContent.title}</p>
        <form
          className="flex flex-col mt-6 w-full px-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col justify-center items-center space-y-4 w-full">
            <Input
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              touched={formik.touched.username}
              errors={formik.errors.username}
              iconName="avatar"
            />
            <Input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              touched={formik.touched.password}
              errors={formik.errors.password}
              iconName="eye"
            />
          </div>
          <Link
            className="mt-2 text-[#00519A] font-medium bg-transparent"
            style={{
              alignSelf: `${lang === "PR" || lang === "AQ" ? "start" : "end"}`,
            }}
            href={"#"}
          >
            {langContent.forgettingPass}
          </Link>
          <button
            className="from-[#087592] to-[#2393B0] text-white bg-gradient-to-r font-medium rounded-[10px] py-4 mt-12"
            type="submit"
          >
            {langContent.enterButton}
          </button>
        </form>
      </div>
    </div>
  );
}
