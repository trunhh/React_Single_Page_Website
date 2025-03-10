// AlertProvider.js
import React, { createContext, useContext, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const AlertContext = createContext();

// **Animations**
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

// **Styled Components**
const AlertContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AlertWrapper = styled.div`
  padding: 32px 48px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${({ type }) =>
    type === "success" ? "#28a745" : type === "danger" ? "#dc3545" : "#ffc107"};
  
  ${({ show }) =>
    show
      ? css`
          animation: ${slideIn} 0.3s ease-in-out forwards;
        `
      : css`
          animation: ${slideOut} 0.3s ease-in-out forwards;
        `}
`;

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (message, type, duration = 3000) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message, type, show: true }]);

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
      <AlertContainer>
        {alerts.map((alert) => (
          <AlertWrapper key={alert.id} show={alert.show} type={alert.type}>
            {alert.message}
          </AlertWrapper>
        ))}
      </AlertContainer>
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
