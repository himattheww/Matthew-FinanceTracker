import React from 'react';
import { SignedOut, SignIn } from '@clerk/clerk-react';
import './Auth.css'; // Ensure you have the appropriate styles
import money from './money.jpg'; // Ensure correct path

export const Auth: React.FC = () => {
  // jadi disini kalau lagi signedout itu ketika signout, dia buka sign in nanti ngarahin ke dashboard
  return (
    <div className="auth-container" style={{ backgroundImage: `url(${money})` }}>
      <SignedOut>
        <SignIn 
          path="/"
          routing="path"
          afterSignInUrl="/dashboard"
        />
      </SignedOut>
    </div>
  );
};
