import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists
import reportWebVitals from './reportWebVitals';

// Football Component
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

// Rendering the Football component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Football />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
