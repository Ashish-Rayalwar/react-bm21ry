import React from 'react';
import './style.css';
import Button from './Components/Button';
export default function App() {
  const buttonClick = (buttonName) => {
    window.alert(`I am ${buttonName} clicked`);
  };

  const button1 = {
    color: 'white',
    background: 'red',
    border: 'none',
    margin: '10px',
    with: '40px',
    height: '30px',
  };

  const button2 = {
    color: 'white',
    background: 'blue',
    border: 'none',
    with: '40px',
    height: '30px',
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button
        buttonText="Button 1"
        buttonStyle={button1}
        onClick={() => buttonClick('button 1')}
      />

      <Button
        buttonText="Button 2"
        buttonStyle={button2}
        onClick={() => buttonClick('button 2')}
      />
    </div>
  );
}
