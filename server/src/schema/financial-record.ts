import mongoose from "mongoose";

interface FinancialRecord {
  userID: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

// mongo punya cara sendiri nge define type data
const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
  // required : true itu, dia butuh diisi atau enggak atau bisa kosong
  userID: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

// disini dia ngebuat model, nama table nya FinancialRecord, isi columnya financialRecordSchema
const financialRecordModel = mongoose.model<FinancialRecord>(
  "FinancialRecord",
  financialRecordSchema
);


export default financialRecordModel