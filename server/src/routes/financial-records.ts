import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

// route pertama yang dibawah ini kira kira mau dibuat ngapain,
// di case ini untuk nge querry semua pengeluaran yang sudah dibuat
// disini param nya user ID, param dibedakan pakai :
router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    // apa yang mau diambil di find
    const records = await FinancialRecordModel.find({ userID: userId });
    if (records.length === 0) {
      return res.status(404).send("No records found for the user.");
    }
    // kalau ada records nya nanti dia ngirim status 200 dan ngirim records ke FE
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

// route disini untuk nge add new record
// disini dia ga butuh specific route, dia pake route yang di index.ts /financial-records

router.post("/", async (req: Request, res: Response) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new FinancialRecordModel(newRecordBody);
    const saveRecord = await newRecord.save();

    res.status(200).send(saveRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

// route disini untuk nge update record
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(
      id,
      newRecordBody,
      { new: true }
    );

    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

// route disini untuk ngedelete

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);

    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
