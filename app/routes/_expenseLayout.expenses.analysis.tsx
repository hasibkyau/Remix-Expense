import React from "react";

import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { ActionFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/data/auth.server";

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
const ExpenseAnalysisPage = () => {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
};

export default ExpenseAnalysisPage;

export async function loader({request}:ActionFunctionArgs){
  await requireUserSession(request);
}
