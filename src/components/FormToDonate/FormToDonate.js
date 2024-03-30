import React, { useState } from 'react';
import './formtodonate.css'; // Import your CSS file

const FormToDonate = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showTnC, setShowTnC] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [btnStyle, setBtnStyle] = useState({
        left: '0',
        background: 'linear-gradient(to right, #ff9800, #ff9800)'
      });
    const [formPositions, setFormPositions] = useState({
      login: { left: '50px', top: '140px' },
      register: { left: '450px', top: '100px' }
    });
  
    const handleToggle = () => {
      setIsLogin(!isLogin);
      setFormPositions({
        login: { left: isLogin ? '-400px' : '50px', top: '140px' },
        register: { left: isLogin ? '50px' : '450px', top: '139px' }
      });
      if (isLogin) {
        setBtnStyle({
          left: '110px',
          background: 'linear-gradient(to left, #ff9800, #ff9800)'
        });
      } else {
        setBtnStyle({
          left: '0',
          background: 'linear-gradient(to right, #ff9800, #ff9800)'
        });
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
     
      if (isLogin) {
        console.log('Logging in...');
      } else {
        console.log('Registering...');
       
        setIsRegistered(true);
        setTimeout(() => {
          setIsRegistered(false);
        }, 3000);
      }
    };
  
    const handleTnCClick = () => {
      setShowTnC(true);
    };
  
    const handleTnCMouseUp = (event) => {
      if (
        event.target.id === 'TnC' ||
        event.target.parentNode.id === 'TnC'
      ) {
        setShowTnC(false);
      }
    };
  
    return (
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn" style={btnStyle}></div>
            <button
              type="button"
              className="toggle-btn"
              onClick={handleToggle}
              style={{ marginRight: '10px' }}
            >
            Monthly
            </button>
            <button
              type="button"
              className="toggle-btn"
              onClick={handleToggle}
            >
              Annualy
            </button>
          </div>
  
          <form
            id="login"
            className="input-group"
            style={{ left: formPositions.login.left, top: formPositions.login.top }}
            onSubmit={handleSubmit}
          >
          <a
        className="payment-button"
        href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=500"
        target="_blank"
        rel="noopener noreferrer"
        >
        ₹500
        </a>
        <a
        className="payment-button"
        href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=1500"
        target="_blank"
        rel="noopener noreferrer"
        >
        ₹1500
        </a>
        <a
        className="payment-button"
        href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=2000"
        target="_blank"
        rel="noopener noreferrer"
        >
        ₹2000
        </a>
        <a
        className="payment-button"
        href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am="
        target="_blank"
        rel="noopener noreferrer"
        >
        Other Amount
        </a>
          </form>
  
          <form
            id="register"
            className="input-group"
            style={{ left: formPositions.register.left, top: formPositions.register.top }}
            onSubmit={handleSubmit}
          >
          <a
          className="payment-button"
          href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=500"
          target="_blank"
          rel="noopener noreferrer"
          >
          ₹5000
          </a>
          <a
          className="payment-button"
          href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=1500"
          target="_blank"
          rel="noopener noreferrer"
          >
          ₹15000
          </a>
          <a
          className="payment-button"
          href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=2000"
          target="_blank"
          rel="noopener noreferrer"
          >
          ₹20000
          </a>
          <a
          className="payment-button"
          href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am="
          target="_blank"
          rel="noopener noreferrer"
          >
          Other Amount
          </a>
          </form>
  
          {showTnC && (
            <div
              id="TnC"
              onMouseUp={handleTnCMouseUp}
              onTouchEnd={handleTnCMouseUp}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
                quisquam odio. Corrupti voluptate debitis error, soluta dolor ratione
                eos, ab nulla, voluptatum cumque adipisci illum odit labore ea nam
                eligendi.
              </p>
            </div>
          )}
  
          {isRegistered && <p>Registered!</p>}
        </div>
      </div>
    );
  };

export default FormToDonate;
