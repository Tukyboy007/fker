import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const notify = (message, type = "info") => {
    toast[type](message, {
      className:
        type === "error"
          ? "error-toast"
          : type === "warning"
          ? "warning-toast"
          : "info-toast",
    });
  };

  const notifyError = (errorMessage) => {
    notify(`${errorMessage}`, "error");
  };

  const notifyWarning = (warningMessage) => {
    notify(`${warningMessage}`, "warning");
  };

  const notifySuccess = (successMessage) => {
    notify(` ${successMessage}`, "success");
  };

  return (
    <NotificationContext.Provider
      value={{ notify, notifyError, notifyWarning, notifySuccess }}
    >
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};
