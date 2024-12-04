import React, { useState } from 'react'
import LoginFirst from './LoginFirst';
import SignupFirst from './SignupFirst';
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
      setIsLogin((prev) => !prev);
  };

  return (
      <div>
          {isLogin ? (
              <LoginFirst onToggle={toggleForm} />
          ) : (
              <SignupFirst onToggle={toggleForm} />
          )}
      </div>
  );
}

export default Login