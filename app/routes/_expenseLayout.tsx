import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import ExpensesHeader from "~/components/navigation/ExpenseHeader";
import { ActionFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/data/auth.server";

const ExpenseLayout = () => {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
};

export default ExpenseLayout;

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

export async function loader({ request }: ActionFunctionArgs) {
  await requireUserSession(request);
}