import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Regex retirado do site: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
const emailRegex = /\S+@\S+\.\S+/;
const passwordLenght = 6;

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    history.push('/foods');
  };

  return (
    <main>
      <h1>Login</h1>
      <form>
        <label htmlFor="email-login">
          E-mail:
          <input
            type="email"
            name="Email"
            id="email"
            data-testid="email-input"
            placeholder="Your email here"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password-login">
          <input
            type="password"
            name="password"
            id="password"
            data-testid="password-input"
            placeholder="Your password here"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={
            !(emailRegex.test(email) && password.length > passwordLenght)
          }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </main>
  );
};

export default Login;
