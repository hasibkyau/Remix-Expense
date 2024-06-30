import { useNavigate } from "@remix-run/react";
import React from "react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

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
