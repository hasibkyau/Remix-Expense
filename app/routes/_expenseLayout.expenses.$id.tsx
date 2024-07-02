import { ActionFunctionArgs } from "@remix-run/node";
import {
  deleteExpense,
  getExpense,
  updateExpense,
} from "~/data/expenses.server";
import { redirect, useNavigate } from "@remix-run/react";
import { validateExpenseInput } from "~/data/validation.server";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { requireUserSession } from "~/data/auth.server";

const ExpenseDetails = () => {
  const navigate = useNavigate();

  function closeHandler() {
    //Navigate programatically
    navigate("..");
  }
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpenseDetails;

export async function loader({ params, request }: ActionFunctionArgs) {
  await requireUserSession(request);

  const expenseId = params.id;
  try {
    const expense = await getExpense(expenseId);
    return expense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function action({ params, request }: ActionFunctionArgs) {
  const expenseId = params.id;

  console.log("method", request.method);

  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
    return redirect("/expenses");
  } else {
    await deleteExpense(expenseId);
    return redirect("/expenses");
  }
}

