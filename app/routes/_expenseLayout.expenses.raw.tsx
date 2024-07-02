import { ActionFunctionArgs } from "@remix-run/node";
import React from "react";
import { requireUserSession } from "~/data/auth.server";

const ExpensesExport = () => {
  return <div>ExpensesExport</div>;
};

export default ExpensesExport;

export async function loader({ request }: ActionFunctionArgs) {
  await requireUserSession(request);
}
