import React from "react";
import styles from "./style.module.css";
export default function NavBar({data}) {
  return (
    <>
      <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3 className={`${styles.a} ${styles.b}`}>Orange</h3>
        <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3">
          <h3>Favourites</h3>
          <h4>{data.filter(item=>item.added_to_favs).length}</h4>
        </div>
      </div>
    </>
  );
}
