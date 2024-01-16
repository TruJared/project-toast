import React, { useEffect, useState } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ message, variant, show, setShowToast, setMessage, setSelectedVariant, variants }) {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        if (show && message) {
            const newToast = {
                message,
                variant,
                show,
                id: Date.now(), // Add a unique id to each toast
            };
            setToasts((prevToasts) => [...prevToasts, newToast]);
            // reset message, variant, and show
            setMessage("");
            setSelectedVariant(variants[0]);
            setShowToast(false);
        }
    }, [show, message, variant, toasts, setMessage, setSelectedVariant, variants, setShowToast]);

    const closeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <ol className={styles.wrapper}>
            {toasts.map((toast, index) => (
                <li key={index} className={styles.toastWrapper}>
                    <Toast
                        id={toast.id}
                        message={toast.message}
                        variant={toast.variant}
                        show={toast.show}
                        setShowToast={closeToast}
                    />
                </li>
            ))}
        </ol>
    );
}
export default ToastShelf;
