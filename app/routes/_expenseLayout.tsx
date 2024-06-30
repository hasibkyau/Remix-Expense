import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import ExpensesHeader from "~/components/navigation/ExpenseHeader";

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
