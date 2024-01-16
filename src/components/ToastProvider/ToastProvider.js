import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);



	const closeToast = (id) => {
		setToasts(toasts.filter((toast) => toast.id !== id));
	};
  return <ToastContext.Provider value={
    {
      toasts,
      setToasts,
      closeToast
    }
  }>{children}</ToastContext.Provider>;
}

export default ToastProvider;
