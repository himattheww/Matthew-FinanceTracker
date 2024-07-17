import express, {Request, Response} from "express";
import financialRecordModel from "../schema/financial-record";

const router = express.Router();

// route pertama yang dibawah ini kira kira mau dibuat ngapain, 
// di case ini untuk nge querry semua pengeluaran yang sudah dibuat

router.get("/getAllByUserID", async (req : Request, res : Response) => {
    try {

    }
    catch(err) {
        
    }
    
})

export default router;