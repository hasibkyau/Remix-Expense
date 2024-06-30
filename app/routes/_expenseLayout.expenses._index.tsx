import { Link } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";

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

      <ExpensesList expenses={DUMMY_EXPENSES} />
    </div>
  );
};

export default Expenses;
