import React from "react";

const Login = () => {
  return (
    <section className="auth login">
      <h2>Welcome Back</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
      <p>Don’t have an account? Sign up!</p>
    </section>
  );
};

export default Login;
