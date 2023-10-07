"use client";

import LangChooser from "@/components/LangChooser";
import { useContextProvider } from "@/context/store";

import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import Input from "@/components/UI/Input";
import Image from "next/image";

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
    <div className="relative w-full h-full flex flex-row justify-center items-center">
      <LangChooser />
      <div className="relative md:flex hidden w-full h-full bg-[#06355F] rounded-e-full justify-center items-center basis-7/12">
        <Image
          className="bg-transparent"
          src={`/images/rahad-building.svg`}
          alt={`rahad building image`}
          width={700}
          height={700}
          sizes="100vw"
          style={{
            width: "700px",
            height: "auto",
          }}
        />
      </div>
      <div className="flex flex-col items-center w-full md:basis-5/12 self-start mt-28">
        <h1 className="text-[#2393B0] font-['Poppins'] text-6xl font-medium">
          RAHAD
        </h1>
        <p className="font-medium mt-14 text-[#294046]">{langContent.title}</p>
        <form
          className="flex flex-col mt-6 w-full px-4 md:px-12 justify-center items-center"
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
            className="from-[#087592] to-[#2393B0] text-white bg-gradient-to-r font-medium rounded-[10px] py-4 mt-20 md:mt-12 md:w-1/2 w-full"
            type="submit"
          >
            {langContent.enterButton}
          </button>
        </form>
      </div>
    </div>
  );
}
