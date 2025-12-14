import React, { useEffect } from 'react';
import styles from './toast.module.css';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert">
      <span className={styles.message}>{message}</span>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close notification"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12.8536 3.14645C13.0488 3.34171 13.0488 3.65829 12.8536 3.85355L9.70711 7L12.8536 10.1464C13.0488 10.3417 13.0488 10.6583 12.8536 10.8536C12.6583 11.0488 12.3417 11.0488 12.1464 10.8536L9 7.70711L5.85355 10.8536C5.65829 11.0488 5.34171 11.0488 5.14645 10.8536C4.95118 10.6583 4.95118 10.3417 5.14645 10.1464L8.29289 7L5.14645 3.85355C4.95118 3.65829 4.95118 3.34171 5.14645 3.14645C5.34171 2.95118 5.65829 2.95118 5.85355 3.14645L9 6.29289L12.1464 3.14645C12.3417 2.95118 12.6583 2.95118 12.8536 3.14645Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

