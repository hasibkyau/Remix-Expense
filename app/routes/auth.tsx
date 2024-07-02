import AuthForm from "~/components/auth/AuthForm";

import authStyles from "~/styles/auth.css";
import MainHeader from "~/components/navigation/MainHeader";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { validateCredentials } from "~/data/validation.server";
import { signup } from "~/data/auth.server";

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

export async function action({ request }: ActionFunctionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try{
    if (authMode === "login") {
      //login logic
    } else {
      await signup(credentials);
      return redirect("/expenses");
    }
  } catch (error:any){
    if(error.status === 422){
      return {credentials: error.message}
    }
  }
}
