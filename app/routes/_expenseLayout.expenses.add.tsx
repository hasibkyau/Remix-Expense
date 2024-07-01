import { ActionFunctionArgs } from "@remix-run/node";
import { redirect, useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from '~/components/util/Modal';
import {addExpense} from '~/data/expenses.server';
import {validateExpenseInput} from '~/data/validation.server';

const AddExpenses = () => {
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
}

export default AddExpenses

export async function action({request}: ActionFunctionArgs){
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  console.log('ExpenseData:', expenseData, formData);
  
  try{
    validateExpenseInput(expenseData);
  }catch(error){
    return error;
  }

  await addExpense(expenseData);
  return redirect('/expenses')
}