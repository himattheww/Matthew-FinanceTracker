import React from 'react';
import { SignedOut, SignIn } from '@clerk/clerk-react';
import './Auth.css'; // Ensure you have the appropriate styles

export const Auth: React.FC = () => {
  return (
    <div className="auth-container">
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
