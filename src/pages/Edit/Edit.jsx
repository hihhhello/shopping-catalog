import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Edit.module.scss";
import Loader from "../../components/Loader";
import ItemForm from "../../components/ItemForm";
import CatalogItem from "../../components/CatalogItem";
import { useSelector } from "react-redux";
import { getItemFromArray } from "../../utils/getItemFromArray";
import { useActions } from "../../hooks/useActions";
import { toast } from "react-toastify";
import { setItemImg } from "../../redux/store/action-creators/item";

export const Edit = () => {
  const { id: itemID } = useParams();
  const { items } = useSelector(({ catalogItems }) => catalogItems);
  const { data: catalogItemData } = getItemFromArray(items, itemID);
  const { editItem } = useActions();
  const { loading, itemImg } = useSelector(({ item }) => item);
  const onEdit = (values, { resetForm }) => {
    if (!values.image && !catalogItemData.img) {
      toast.error("Image is required!", {
        toastId: "image-error",
      });
      return;
    }
    setItemImg(values.image || catalogItemData.img);
    editItem({
      ...values,
      image: values.image || catalogItemData.img,
      id: itemID,
    });
  };
  const {
    values: { img: previewImg, ...previewValues },
  } = useSelector(({ form }) => form);
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
              <ItemForm
                onSubmit={onEdit}
                edit
                initialValues={catalogItemData}
              />
            </div>
          </div>
          <div className={styles.preview}>
            <h3>Preview:</h3>
            <CatalogItem
              preview
              img={itemImg || previewImg}
              {...previewValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
