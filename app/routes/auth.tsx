import React from "react";
import AuthForm from "~/components/auth/AuthForm";

import authStyles from "~/styles/auth.css";
import MainHeader from "~/components/navigation/MainHeader";

const AuthPage = () => {
  return (
    <>
      <MainHeader />
      <AuthForm />;
    </>
  );
};

export default AuthPage;

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
