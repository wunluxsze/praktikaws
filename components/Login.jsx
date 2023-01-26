import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Login({ account, setLogin }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  function handleSubmit() {
    console.log(name, password);
    account.map((el) => {
      if (name === el.name && password === el.password) {
        setLogin(true);
      }
    });
  }

  function onPasswordChange(e) {
    let val = e.target.value;
    setPassword(val);
  }
  function onNameChange(e) {
    let val = e.target.value;
    setName(val);
  }

  let nameColor = name === true ? 'green' : 'red';
  let passwordColor = password === true ? 'green' : 'red';
  return (
    <div>
      <form>
        <p>
          <label>имя:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={onNameChange}
            style={{ borderColor: nameColor }}
          />
        </p>
        <p>
          <label>пароль:</label>
          <br />
          <input
            type="text"
            value={password}
            onChange={onPasswordChange}
            style={{ borderColor: passwordColor }}
          />
        </p>
        <button type="submit" value="отправить" onClick={handleSubmit}>
          <Link to="/"> отправить </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
