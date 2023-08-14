"use client";

import { setView } from "@/redux/features/modalSlice";
import { GridView, RowsView } from "@/utils/icons";
import { useDispatch, useSelector } from "react-redux";

const ViewBtns = () => {
  const dispatch = useDispatch();
  const { activeView } = useSelector((state) => state.modalSlice);

  return (
    <div className="flex gap-2 items-center">
      <button
        className={`${activeView === "grid" ? "bg-black text-white" : ""} p-2`}
        type="button"
        onClick={() => dispatch(setView("grid"))}
      >
        <GridView />
      </button>
      <button
        className={`${activeView === "row" ? "bg-black text-white" : ""} p-2`}
        type="button"
        onClick={() => dispatch(setView("row"))}
      >
        <RowsView />
      </button>
    </div>
  );
};

export default ViewBtns;
