import { model, models, Schema, Document } from "mongoose";

export interface IPatient extends Document {
  clinicId: Schema.Types.ObjectId; //
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  phone: string;
  address: string;
  medicalHistory: Schema.Types.ObjectId[];
  appointments: Schema.Types.ObjectId[];
  createdAt: Date;
}

const PatientSchema = new Schema({
  clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  medicalHistory: [{ type: Schema.Types.ObjectId, ref: "MedicalHistory" }],
  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  createdAt: { type: Date, default: Date.now },
});

const Patient = models.Patient || model("Patient", PatientSchema);

export default Patient;

// Usage example: اضافة بيانات المرضى
