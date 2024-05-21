import { useEffect } from "react";
import React from "react";
import { useFormik } from "formik";
import { UserValidation } from "./formValidation/UserValidation.js";
import Card from "../../common/Card/Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  postReq,
  getReq,
  deleteReq,
  patchRequest,
} from "../../../useCases/Api/api.js";
import initialValues from "./initialValues.js";
import { Spin } from "antd";

function UserForm() {
  const dispatch = useDispatch();

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: UserValidation,
    onSubmit: (values, event) => {
      const payload = { values, event };

      dispatch(postReq(payload));
    },
  });

  useEffect(() => {
    dispatch(getReq());
  }, []);

  const { data, isLoading, isError } = useSelector((state) => state.api);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img64Create = reader.result;
      setFieldValue("file", img64Create);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <div
        className="main-container bg-indigo-200 mt-1 w-72  fixed left-0 shadow-md"
        style={{ height: "91vh" }}
      >
        <div className="flex flex-col w-60 m-4   ">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              placeholder="Name"
              type="text"
            />
            {errors.name && touched.name ? (
              <p className="text-rose-600 w-60 ml-4 ">{errors.name}</p>
            ) : null}
            <input
              type="text"
              name="description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              placeholder="Description"
            />
            {errors.description && touched.description ? (
              <p className="text-rose-600 w-60 ml-4 ">{errors.description}</p>
            ) : null}

            <input
              className="break-words w-60 cursor-pointer"
              type="file"
              name="file"
              id=""
              onBlur={handleBlur}
              onChange={handleFileChange}
            />
            {errors.file && touched.file ? (
              <p className="text-rose-600 w-60 ml-4 ">{errors.file}</p>
            ) : null}

            <button
              className="p-4 m-4 ml-14  bg-black text-white rounded-xl"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="ml-96  ">
        {isLoading ? (
          <div className="flex w-full h-full items-center justify-center mt-60 ">
            <Spin className="flex " size="large" />
          </div>
        ) : isError ? (
          <div className="flex w-full h-full items-center justify-center mt-60 ">
            <Spin className="flex " size="large" />
          </div>
        ) : (
          data?.data?.map((item) => (
            // console.log("item", item),
            <Card
              btnText={"Delete"}
              key={item.id}
              name={item.name}
              dec={item.description}
              img={item.file}
              isFav={item.favourite}
              favButton={() => dispatch(patchRequest(item))}
              onDelete={() => dispatch(deleteReq(item.id))}
            />
          ))
        )}
      </div>
    </>
  );
}

export default UserForm;
