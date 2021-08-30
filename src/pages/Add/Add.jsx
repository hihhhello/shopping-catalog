import React from "react";
import ItemForm from "../../components/ItemForm";
import styles from "./Add.module.scss";
import { useSelector } from "react-redux";
import CatalogItem from "../../components/CatalogItem";
import { useActions } from "../../hooks/useActions";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

export const Add = () => {
  const { loading, itemImg } = useSelector(({ item }) => item);
  const { addItem } = useActions();

  const onAdd = (values, { resetForm }) => {
    if (!values.image) {
      toast.error("Image is required!", {
        toastId: "image-error",
      });
      return;
    }
    addItem(values);
    resetForm();
  };
  const { values: previewValues } = useSelector(({ form }) => form);
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles["form-wrapper"]}>
            {loading && (
              <div className={styles.loader}>
                <Loader />
              </div>
            )}
            <div
              className={
                loading
                  ? [styles.form, styles.form_blocked].join(" ")
                  : styles.form
              }
            >
              <ItemForm onSubmit={onAdd} />
            </div>
          </div>
          <div className={styles.preview}>
            <h3>Preview:</h3>
            <CatalogItem preview img={itemImg} {...previewValues} />
          </div>
        </div>
      </div>
    </div>
  );
};
