import React, { useEffect } from "react";
import styles from "./ItemForm.module.scss";
import { useActions } from "../../hooks/useActions";
import Button from "../Button";
import btnStyles from "../Button/Button.module.scss";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const ItemForm = ({ edit = false, onSubmit, initialValues = null }) => {
  const today = new Date();
  const { setFormValues, setItemImg } = useActions();

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: edit
      ? initialValues
      : {
          title: "",
          descr: "",
          price: "",
          discount: "",
          discountEndDate: "",
        },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(20, ({ min }) => `Title must be more than ${min} characters`)
        .max(60, ({ max }) => `Title must be less than ${max} characters`)
        .required("Required"),
      descr: Yup.string().max(
        200,
        ({ max }) => `Description must be less than ${max} characters`
      ),
      price: Yup.number()
        .min(0.01, ({ min }) => `Price must be more than ${min}$`)
        .max(99999999.99, ({ max }) => `Price must be less than ${max}$`)
        .required("Required"),
      discount: Yup.number()
        .min(10, ({ min }) => `Discount must be more than ${min}%`)
        .max(90, ({ max }) => `Discount must be less than ${max}%`),
      discountEndDate: Yup.date().when("discount", {
        is: (val) => Boolean(val),
        then: Yup.date()
          .min(today, "Date must be more than today")
          .required("Required"),
      }),
    }),
    onSubmit,
  });
  useEffect(() => {
    setFormValues(values);
  }, [values]);
  const clearFormHandler = () => {
    setItemImg(null);
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles["field-wrapper"]}>
        <label htmlFor="title">Title</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.title}
          id="title"
          name="title"
          type="text"
        />
        {touched.title && errors.title ? (
          <div className={styles.error}>{errors.title}</div>
        ) : null}
      </div>
      <div className={styles["field-wrapper"]}>
        <label htmlFor="image">Image</label>
        <input
          onChange={(event) => {
            const file = event.target.files[0];
            setItemImg(null);
            setFieldValue("image", null);
            if (file) {
              let img = new Image();
              img.onload = function () {
                if (
                  this.width < 200 ||
                  this.width > 4000 ||
                  this.height < 200 ||
                  this.height > 4000
                ) {
                  toast.warning(
                    `Width must be more than 200px and less than 4000px. Your width/height: ${this.width} ${this.height}`
                  );
                  return;
                }
                setItemImg(img.src);
                setFieldValue("image", event.target.files[0]);
              };

              img.src = window.URL.createObjectURL(event.target.files[0]);
            }
          }}
          id="image"
          name="image"
          type="file"
        />
      </div>
      <div className={styles["field-wrapper"]}>
        <label htmlFor="descr">Description</label>
        <textarea
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.descr}
          id="descr"
          name="descr"
          type="text"
        />
        {touched.descr && errors.descr ? (
          <div className={styles.error}>{errors.descr}</div>
        ) : null}
      </div>
      <div className={styles["field-wrapper"]}>
        <label htmlFor="price">Price</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.price}
          id="price"
          name="price"
          type="number"
          step="0.01"
        />
        {touched.price && errors.price ? (
          <div className={styles.error}>{errors.price}</div>
        ) : null}
      </div>
      <div className={styles["field-wrapper"]}>
        <label htmlFor="discount">Discount</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.discount}
          id="discount"
          name="discount"
          type="number"
        />
        {touched.discount && errors.discount ? (
          <div className={styles.error}>{errors.discount}</div>
        ) : null}
      </div>
      <div
        className={
          values.discount
            ? styles["field-wrapper"]
            : [styles["field-wrapper"], styles["field-wrapper_blocked"]].join(
                " "
              )
        }
      >
        <label htmlFor="discountEndDate">Discount end date</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.discountEndDate}
          id="discountEndDate"
          name="discountEndDate"
          type="date"
        />
        {touched.discountEndDate && errors.discountEndDate && (
          <div className={styles.error}>{errors.discountEndDate}</div>
        )}
      </div>
      <div className={styles.btns}>
        <input
          className={[btnStyles.btn, btnStyles["submit"]].join(" ")}
          type="submit"
          value={edit ? "Edit" : "Add"}
        />
        <Button text={"Clear"} color={"delete"} onClick={clearFormHandler} />
      </div>
    </form>
  );
};
