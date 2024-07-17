import {useUser} from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
// import user dari clerk
export const Dashboard = () => {
    const {user} = useUser();
    return (
        <div className="dashboard-container">
         <h1>
            Welcome {user?.firstName} ! Here are your finances
            <FinancialRecordForm/>
            <FinancialRecordList/>
         </h1>
        </div>
    )
}
