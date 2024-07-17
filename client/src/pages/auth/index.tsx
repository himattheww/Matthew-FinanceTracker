import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
} from "@clerk/clerk-react";

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
            <UserButton/>
        </SignedIn>

        <>
        </>
    
    </div>
  )
};
