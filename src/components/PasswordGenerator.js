import React, { useState } from "react";
import "./Password.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("Abcdef@12345");
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [copied, setCopied] = useState(false);

  const GeneratePassword = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (number) str += "0123456789";
    if (symbol) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
    setCopied(false);
  };

  const CopyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getStrength = () => {
    let strength = 0;
    if (length >= 12) strength++;
    if (number) strength++;
    if (symbol) strength++;
    return strength;
  };

  return (
    <div className="generator-container">
      <h1>Password Generator</h1>

      <div className="password-wrapper">
        <span className="password-box">{password}</span>
        <button className="copy-btn" onClick={CopyPassword}>
          {copied ? "✅" : "📋"}
        </button>
      </div>
      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{
            width: `${getStrength() * 33}%`,
            background:
              getStrength() === 1
                ? "#ff4d4d"
                : getStrength() === 2
                ? "#ffb84d"
                : "#42e695",
          }}
        ></div>
      </div>

      <div>
        <label>Password Length ({length})</label>
        <input
          type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>

      <button onClick={GeneratePassword}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
