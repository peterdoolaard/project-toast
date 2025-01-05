import React from "react";

import { ToastContext } from "../ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map(({ message, variant, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} id={id}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
