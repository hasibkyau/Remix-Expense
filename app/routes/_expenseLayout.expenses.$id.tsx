import { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect, useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense, updateExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

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

export async function loader({ params }: ActionFunctionArgs) {
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
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await updateExpense(expenseId, expenseData);
  return redirect("/expenses");
}
