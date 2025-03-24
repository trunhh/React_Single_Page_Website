import { createContext, useContext, useState } from "react";
import { Alert } from "react-bootstrap";

const AlertContext = createContext();


export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (message, variant, duration = 3000) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message, variant, show: true }]);

    setTimeout(() => {
      setAlerts((prev) =>
        prev.map((alert) =>
          alert.id === id ? { ...alert, show: false } : alert
        )
      );

      // **Wait for animation to finish before removal**
      setTimeout(() => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
      }, 300); // 300ms = animation duration
    }, duration);
  };

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      <div className="position-fixed bottom-0 start-0 ms-3 d-flex flex-column gap-3 z-3">
        {alerts.map((alert) => (
          <Alert key={alert.id} className={alert.show ? 'show' : 'hide'} variant={alert.variant}>
            {alert.message}
          </Alert>
        ))}
      </div>
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
