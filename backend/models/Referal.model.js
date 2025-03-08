import mongoose from "mongoose";

const referalSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    companyName: { type: String, required: true },
    jobId: { type: String, required: true },
    resumeLink: { type: String, required: true },
    alumniEmail: { type: String },
    referralLink: { type: String }
}, { timestamps: true });

const Referal = mongoose.model("Referal", referalSchema);
export default Referal;
