import React from "react";
import Button from "../Button";
import styles from "./CatalogItem.module.scss";
import skeletonStyles from "../CatalogSkeletonItem/CatalogSkeletonItem.module.scss";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import { useHistory } from "react-router-dom";
const getDateDiff = (date1, date2) => {
  return Math.ceil(
    Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
  );
};

// discount in percents
const getPriceWithDiscount = (price, discount) =>
  price - price * (discount / 100);

export const CatalogItem = ({
  id,
  img,
  title,
  descr,
  price,
  discount = null,
  discountEndDate = null,
  preview = false,
}) => {
  const history = useHistory();
  const { loadingID, loading } = useSelector(({ item }) => item);
  const { deleteItem } = useActions();
  return (
    <div className={styles.wrapper}>
      {loading && loadingID === id && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      <div
        className={
          loading && loadingID !== id
            ? [styles.inner, styles.inner_blocked].join(" ")
            : styles.inner
        }
      >
        <div className={styles.header}>
          <div
            className={
              preview
                ? styles.img
                : [styles.img, skeletonStyles.skeleton].join(" ")
            }
          >
            {img && <img src={img} alt="catalog-item" />}
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.descr}>{descr}</p>
        </div>
        <div className={styles.body}>
          <div className={styles["price-wrapper"]}>
            <span
              className={
                discount
                  ? [styles.price, styles["price_old"]].join(" ")
                  : styles.price
              }
            >
              {price && `${price.toFixed(2)}$`}
            </span>
            {discount && (
              <span className={styles.discount}>{`${getPriceWithDiscount(
                price,
                discount
              ).toFixed(2)}$`}</span>
            )}
          </div>
          {discount &&
            discountEndDate &&
            new Date(discountEndDate) > new Date() && (
              <div className={styles["discount-period"]}>
                Ends in: {getDateDiff(new Date(), new Date(discountEndDate))}{" "}
                {getDateDiff(new Date(), new Date(discountEndDate)) === 1
                  ? "day"
                  : "days"}
              </div>
            )}
          <div
            className={
              preview
                ? [styles.btns, styles.btns_blocked].join(" ")
                : styles.btns
            }
          >
            <Button
              text={"Edit"}
              color={"primary"}
              onClick={() => history.push(`/edit/${id}`)}
            />
            <Button
              text={"Delete"}
              color={"delete"}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
