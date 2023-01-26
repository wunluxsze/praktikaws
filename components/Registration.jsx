import React, { useState } from 'react';
import uuid from 'react-uuid';

function Registration({ propName, propPassword, propEmail, account, setAccount }) {
  const [name, setName] = useState(propName);
  const [password, setPassword] = useState(propPassword);
  const [email, setEmail] = useState(propEmail);
  const [nameIsValid, setNameIsValid] = useState(validateName(name));
  const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));
  const [emailIsValid, setEmailIsValid] = useState(validateEmail(propEmail));

  function validateEmail(email) {
    const regExp = /.+@.+\..+/i;
    if (email.match(regExp)) {
      return true;
    }
  }

  function validateName(name) {
    return name.length > 2;
  }
  function validatePassword(age) {
    return +age >= 10;
  }
  function onNameChange(e) {
    let val = e.target.value;
    let valid = validateName(val);
    setName(val);
    setNameIsValid(valid);
  }
  function onPasswordChange(e) {
    let val = e.target.value;
    let valid = validatePassword(val);
    setPassword(val);
    setPasswordIsValid(valid);
  }
  function onEmailChange(e) {
    let val = e.target.value;
    let valid = validateEmail(val);
    setEmail(val);
    setEmailIsValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nameIsValid === true && passwordIsValid === true && emailIsValid === true) {
      setAccount([...account, { id: uuid(), name: name, password: password }]);
    }
  }

  let nameColor = nameIsValid === true ? 'green' : 'red';
  let passwordColor = passwordIsValid === true ? 'green' : 'red';
  let emailColor = emailIsValid === true ? 'green' : 'red';
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <label>почта:</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={onEmailChange}
            style={{ borderColor: emailColor }}
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
        <input type="submit" value="отправить" />
      </form>
    </div>
  );
}

export default Registration;
