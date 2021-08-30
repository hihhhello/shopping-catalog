import React from "react";
import styles from "./CatalogSkeletonItem.module.scss";
import itemStyles from "../CatalogItem/CatalogItem.module.scss";
export const CatalogSkeletonItem = () => {
  return (
    <div className={itemStyles.wrapper}>
      <div className={itemStyles.inner}>
        <div className={itemStyles.header}>
          <div className={[itemStyles.img, styles.skeleton].join(" ")}></div>
          <h3 className={itemStyles.title}>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
          </h3>
          <div className={itemStyles.descr}>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
            <div
              className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
            ></div>
          </div>
        </div>
        <div className={itemStyles.body}>
          <div className={itemStyles["price-wrapper"]}>
            <span className={itemStyles.price}>
              <div
                className={[styles.skeleton, styles["skeleton-text"]].join(" ")}
              ></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
