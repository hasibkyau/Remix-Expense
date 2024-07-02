import { Link, json, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "~/data/expenses.server";
import { requireUserSession } from "~/data/auth.server";
import { ActionFunctionArgs } from "@remix-run/node";

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

const Expenses = () => {
  const expenses = useLoaderData();
  // console.log(expenses);

  return (
    <div className="m-3">
      <section id="expenses-actions">
        <Link to="add">
          <FaPlus />
          <span>Add Expense</span>
        </Link>
        <a href="/expenses/raw">
          <FaDownload />
          <span>Load Raw Data</span>
        </a>
      </section>

      <ExpensesList expenses={expenses} />
      {/* <ExpensesList expenses={DUMMY_EXPENSES} /> */}
    </div>
  );
};

export default Expenses;

export async function loader({request}: ActionFunctionArgs) {
  await requireUserSession(request);

  const expenses = await getExpenses();
  return json(expenses);
}
