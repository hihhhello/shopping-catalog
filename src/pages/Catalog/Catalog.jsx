import React, { useEffect } from "react";
// import CatalogPlaceholder from "../../components/CatalogPlaceholder";
import styles from "./Catalog.module.scss";
import { SKELETON_ITEMS } from "../../utils/consts";
import CatalogSkeletonItem from "../../components/CatalogSkeletonItem";
import CatalogItem from "../../components/CatalogItem";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const catalogSkeletonItems = () => {
  const items = [];
  for (let i = 0; i <= SKELETON_ITEMS; i++) {
    items.push(<CatalogSkeletonItem key={i} />);
  }
  return items;
};

export const Catalog = () => {
  const { items, loading, error } = useSelector(
    ({ catalogItems }) => catalogItems
  );
  const { fetchCatalogItems } = useActions();

  useEffect(() => {
    fetchCatalogItems();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {error ? (
          error
        ) : (
          <div className={styles.items}>
            {loading ? (
              catalogSkeletonItems()
            ) : (
              <>
                {items.length
                  ? items.map(({ id, data }) => {
                      return <CatalogItem key={id} id={id} {...data} />;
                    })
                  : null}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
