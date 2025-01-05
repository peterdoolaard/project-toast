import React, { createContext, useEffect, useState } from 'react';

export const ToastContext = createContext(null);

function ToastProvider({ children }) {
  const [ message, setMessage ] = useState('');
  const [ variant, setVariant ] = useState('notice');
  const [ toastList, setToastList ] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();

    const id = crypto.randomUUID();
    const newToast = { message, variant, id };

    const newToastList = [ ...toastList, newToast ];
    setToastList(newToastList);

    setMessage('');
    setVariant('notice');
    event.target.reset();
  };

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setToastList([]);
      }
    });

    return () => {
      window.removeEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          setToastList([]);
        }
      });
    };
  }, []);


  const value = { toastList, setToastList, message, setMessage, variant, setVariant, handleSubmit };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
