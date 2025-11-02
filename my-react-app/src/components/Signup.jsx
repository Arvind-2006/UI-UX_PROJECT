import React from "react";

const Signup = () => {
  return (
    <section className="auth signup">
      <h2>Create an Account</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Sign Up</button>
      </form>
      <p>Already have an account? Login here!</p>
    </section>
  );
};

export default Signup;
