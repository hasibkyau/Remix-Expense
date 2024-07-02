import { ActionFunctionArgs } from "@remix-run/node";
import { json, useNavigate } from "@remix-run/react";
import React from "react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense } from "~/data/expenses.server";

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
