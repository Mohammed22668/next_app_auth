import { model, models, Schema, Document } from "mongoose";

export interface IMedicalRecord extends Document {
  clinicId: Schema.Types.ObjectId; //
  patientId: Schema.Types.ObjectId;
  visitDate: Date;
  diagnosis: string; // diagnosis : التشخيص
  treatment: string; // العلاج
  prescribedMedications: Schema.Types.ObjectId[]; // الأدوية الموصوفة
  testsPerformed: Schema.Types.ObjectId[]; // الفحوصات المنجزة
  surgeriesPerformed: Schema.Types.ObjectId[]; // العمليات الجراحية المنجزة
  notes: string;
  createdAt: Date;
}

const MedicalRecordSchema = new Schema({
  clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
  patientId: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
  visitDate: { type: Date, required: true },
  diagnosis: { type: String, required: true },
  treatment: { type: String, required: true },
  prescribedMedications: [{ type: Schema.Types.ObjectId, ref: "Medication" }],
  testsPerformed: [{ type: Schema.Types.ObjectId, ref: "Test" }],
  surgeriesPerformed: [{ type: Schema.Types.ObjectId, ref: "Surgery" }],
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const MedicalRecord =
  models.MedicalRecord || model("MedicalRecord", MedicalRecordSchema);

export default MedicalRecord;

// Example usage: السجل الطبي للمريض
