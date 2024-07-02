import AuthForm from "~/components/auth/AuthForm";

import authStyles from "~/styles/auth.css";
import MainHeader from "~/components/navigation/MainHeader";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { validateCredentials } from "~/data/validation.server";
import { login, signup } from "~/data/auth.server";

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

  try {
    if (authMode === "login") {
      return await login(credentials);
    } else {
      return await signup(credentials);
    }
  } catch (error: any) {
    return { credentials: error.message };
  }
}
