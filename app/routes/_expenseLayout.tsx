import { Link, Outlet } from "@remix-run/react";
import React from "react";

const ExpenseLayout = () => {
  return (
    <div className="m-3">
      <ul className="p-2 bg-purple-400 text-red-50 flex gap-3">
        <Link to={"./expenses/add"}>Add</Link>
        <Link to={"./expenses/1"}>Edit</Link>
        <Link to={"./expenses/analysis"}>Analysis</Link>
        <Link to={"./expenses/raw"}>Export</Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default ExpenseLayout;
