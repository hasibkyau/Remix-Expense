import { Link, Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import ExpensesHeader from "~/components/navigation/ExpenseHeader";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    data: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 15.39,
    data: new Date().toISOString(),
  },
];

const ExpenseLayout = () => {
  return (
    <>
      <ExpensesHeader />
      {/* <ul className="p-2 bg-purple-400 text-red-50 flex gap-3">
        <Link to={"./expenses/add"}>Add</Link>
        <Link to={"./expenses/1"}>Edit</Link>
        <Link to={"./expenses/analysis"}>Analysis</Link>
        <Link to={"./expenses/raw"}>Export</Link>
      </ul> */}
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export default ExpenseLayout;

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
