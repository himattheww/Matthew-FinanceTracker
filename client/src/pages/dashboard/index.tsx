import { useMemo } from "react";
import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import './financial-record.css'
import { useFinancialRecords } from "../../contexts/financial-record-context";
import Navbar from "../components/Navbar";

// import user dari clerk
export const Dashboard = () => {
  const { user } = useUser();
  const {records} = useFinancialRecords()

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    })

    return totalAmount;
    
  }, [records])
  return (
    <>
    <Navbar/>
    <div className="dashboard-container">
      Welcome {user?.firstName} ! Here are your finances
      <FinancialRecordForm />
      <div>Total Monthly : {totalMonthly}</div>
      <FinancialRecordList />
    </div>
    </>
  );
};
