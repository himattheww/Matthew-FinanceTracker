import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
} from "@clerk/clerk-react";
import {Navigate} from "react-router-dom"

export const Auth = () => {
  return (
    <div className="sign-in-container">
        {/* kalau dia di cover di contoh dibawah ini maka dia nunjukin component 
        ini ketika dia di keadaan yang mengcover , disini case nya ketika signout */}
        <SignedOut>
            <SignUpButton mode="modal"/>
            <SignInButton mode="modal"/>
        </SignedOut>

        <SignedIn>
          <Navigate to="/"/>
        </SignedIn>

        <>
        </>
    
    </div>
  )
};
