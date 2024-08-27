import { models, model, Schema, Document } from "mongoose";

export interface IMedication extends Document {
  clinicId: Schema.Types.ObjectId; //
  name: string;
  dosage: string;
  instructions: string;
}

const MedicationSchema = new Schema({
  clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  instructions: { type: String, required: true },
});

const Medication = models.Medication || model("Medication", MedicationSchema);

export default Medication;

// Usage: يستخدم لاضافة العلاجات
