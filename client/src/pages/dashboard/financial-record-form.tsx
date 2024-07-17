import { useState } from "react";
// import user dari clerk
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordForm = () => {

    // financeForm kalau banyak state
    // const [description, setDescription] = useState<string>("")
    // const [date, setAmount] = useState<Date>()
    // const [category, setCategory] = useState<string>("")
    // const [paymentMethod, setPaymentMethod] = useState<string>("")
    
    const {user} = useUser();

    // kenapa amount string? karena ketika dia ngambil dari input itu bentuk string
    // maka di parsing aja ke int/float
    type FinanceForm = {
        description: string;
        amount: string;
        category: string;
        paymentMethod: string;
    }
    const [financeForm, setFinanceForm] = 
    useState({
        description: "" , 
        amount: "", 
        category: "", 
        paymentMethod: ""}
        )

    // React Form Event
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const newRecord = {
            userID : user?.id,
            date : new Date(),
            description : financeForm.description,
            amount : parseFloat(financeForm.amount),
            category : financeForm.category,
            paymentMethod : financeForm.paymentMethod
        }

        // add Record nanti manggil dari database dan ngirim data new Record
        // addRecord(newRecord)
        setFinanceForm({
            description: "" ,
            amount: "" ,
            category: "" ,
            paymentMethod: ""
        })

        // kalau mau make satu cukup pake spread operator contohnya dibawah ini dan di onchange
        // setFinanceForm({...financeForm, yang mau dipake })
    }



  return (
    <div className="form-container">
      FinancialRecordForm
      <form>
        <div className="form-field">
          <label>Description :</label>
          <input
            type="text"
            required
            className="input"
            value={financeForm.description}
            onChange={(e) => setFinanceForm({...financeForm, description: e.target.value})}
          />
        </div>
        
        <div className="form-field">
          <label>Amount :</label>
          <input
            type="number"
            required
            className="input"
            value={financeForm.amount}
            onChange={(e) => setFinanceForm({...financeForm, amount: e.target.value})}
          />
        </div>
        <div className="form-field">
          <label>Category :</label>
          <select required className="input"  value={financeForm.category} onChange={(e) => setFinanceForm({...financeForm, category: e.target.value})}>
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
          <select required className="input"  value={financeForm.paymentMethod} onChange={(e) => setFinanceForm({...financeForm, paymentMethod: e.target.value})}>
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Food</option>
            <option value="Cash">Rent</option>
            <option value="Bank Transfer">Salary</option>
          </select>
        </div>
        <button type="submit" className="button">Add Record</button>
      </form>
    </div>
  );
};
