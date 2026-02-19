import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numberChanged, setNumberChanged] = useState(false);
  const [charChanged, setCharChanged] = useState(false);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberChanged) {
      str += "0123456789";
    }

    if (charChanged) {
      str += "+-)(*%$#@{}";
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, numberChanged, charChanged]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div>
      <h1>Password Generator 🔐</h1>

      <h2>{password}</h2>

      <div className="controls">
        <input
          type="range"
          min="5"
          max="50"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <p>Length: {length}</p>

        <div>
          <input
            type="checkbox"
            checked={numberChanged}
            onChange={() => setNumberChanged(!numberChanged)}
          />
          <label> Include Numbers</label>
        </div>

        <div>
          <input
            type="checkbox"
            checked={charChanged}
            onChange={() => setCharChanged(!charChanged)}
          />
          <label> Include Special Characters</label>
        </div>

        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
