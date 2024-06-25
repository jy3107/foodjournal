import React from "react";
import food from "./food.png";
import { useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignInButton } from "@clerk/clerk-react";

const VITE_CLERK_PUBLISHABLE_KEY =
  "pk_test_cGVhY2VmdWwtd3Jlbi0xNC5jbGVyay5hY2NvdW50cy5kZXYk"; // Replace with your Clerk publishable key

function Home() {
  const navigate = useNavigate();

  const journalPage = () => {
    navigate("/journal");
  };

  const CustomButton = () => {
    const handleSignIn = () => {
      // Optional: You can perform additional actions here before signing in
    };

    return (
      <SignInButton
        onUserSignedIn={journalPage()} // Directly navigate to journalPage after sign-in
        onClick={handleSignIn}
      >
        <button className="start-btn">Make Your Food Journal!</button>
      </SignInButton>
    );
  };

  return (
    <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
      <div className="app">
        <div className="row">
          <img
            className="food"
            src={food}
            height={600}
            width={550}
            alt="food"
          />
          <div className="col">
            <h1 className="title">Foodie Journal</h1>
            <CustomButton />
          </div>
        </div>
      </div>
    </ClerkProvider>
  );
}

export default Home;
