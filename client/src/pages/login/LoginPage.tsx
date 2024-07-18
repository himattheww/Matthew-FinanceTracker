// src/LoginPage.tsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './LoginPage.css'; // ganti dengan path CSS sesuai lokasi Anda

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/sign-up"
      />
    </div>
  );
};

export default LoginPage;
