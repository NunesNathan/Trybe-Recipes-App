import React from 'react';

function Login() {
  return (
    <div>
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
          />
        </label>
        <label htmlFor="password-login">
          <input
            type="password"
            name="password"
            id="password"
            data-testid="password-input"
            placeholder="Your password here"
          />
        </label>

        <button type="submit" data-testid="login-submit-btn">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
