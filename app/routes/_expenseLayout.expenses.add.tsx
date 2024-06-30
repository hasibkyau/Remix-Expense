import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from '~/components/util/Modal'

const AddExpenses = () => {
  const navigate = useNavigate();
  function closeHandler(){
    //Navigate programatically
    navigate('..');
  }
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default AddExpenses;
