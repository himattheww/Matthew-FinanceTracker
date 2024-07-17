import { useState } from "react";
// import user dari clerk
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordForm = () => {

    // financeForm kalau banyak state
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [paymentMethod, setPaymentMethod] = useState<string>("")
    
    const {addRecord} =useFinancialRecords()
    
    const {user} = useUser();

    // kenapa amount string? karena ketika dia ngambil dari input itu bentuk string
    // maka di parsing aja ke int/float
    // type FinanceForm = {
    //     description: string;
    //     amount: string;
    //     category: string;
    //     paymentMethod: string;
    // }
    // const [financeForm, setFinanceForm] = 
    // useState({
    //     description: "" , 
    //     amount: "", 
    //     category: "", 
    //     paymentMethod: ""}
    //     )

    // React Form Event
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const newRecord = {
            userID : user?.id ?? "",
            date : new Date(),
            description : description,
            amount : parseFloat(amount),
            category : category,
            paymentMethod : paymentMethod
        }

        // add Record nanti manggil dari database dan ngirim data new Record
        addRecord(newRecord)
        setDescription("")
        setAmount("")
        setCategory("")
        setPaymentMethod("")

        // kalau mau make satu cukup pake spread operator contohnya dibawah ini dan di onchange
        // setFinanceForm({...financeForm, yang mau dipake })
    }



  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description :</label>
          <input
            type="text"
            required
            className="input"
            value={description}
            onChange={(e) => setDescription (e.target.value)}
          />
        </div>
        
        <div className="form-field">
          <label>Amount :</label>
          <input
            type="number"
            required
            className="input"
            value={amount}
            onChange={(e) => setAmount (e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Category :</label>
          <select required className="input"  value={category} onChange={(e) => setCategory (e.target.value)}>
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-field">
          <label>Payment Method :</label>
          <select required className="input"  value={paymentMethod} onChange={(e) => setPaymentMethod (e.target.value)}>
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">Add Record</button>
      </form>
    </div>
  );
};
