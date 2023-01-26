import { Home, Registration, Login } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import uuid from 'react-uuid';
import React, { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);

  const [account, setAccount] = useState([
    { id: uuid(), name: 'admin', password: 'admin' },
    { id: uuid(), name: 'тыыы', password: '88888' },
    { id: uuid(), name: 'оннн', password: 'никогданевзломают' },
  ]);

  return (
    <Router>
      <div>
        <header>
          {login == true && <p>ты зареган</p>}
          <button>
            <Link to="/reg">Регистрация</Link>
          </button>
          <button>
            <Link to="/login">Логин</Link>
          </button>
        </header>
        <Routes>
          <Route
            path="/reg"
            element={
              <Registration
                propName={''}
                propPassword={''}
                propEmail={''}
                account={account}
                setAccount={setAccount}
              />
            }
          />

          <Route path="/" element={<Home login={login} />} />
          <Route
            path="/login"
            element={
              <Login
                setLogin={setLogin}
                account={account}
                propName={'admin123'}
                propPassword={'123'}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
