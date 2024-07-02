import React from "react";
import AuthForm from "~/components/auth/AuthForm";

import authStyles from "~/styles/auth.css";
import MainHeader from "~/components/navigation/MainHeader";
import { ActionFunctionArgs } from "@remix-run/node";

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

export async function action({request}: ActionFunctionArgs){
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  if(authMode === 'login'){
    //login logic
  }else{
    //signup logic
  }
}