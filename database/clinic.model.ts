import { Schema, models, model, Document } from "mongoose";

export interface IClinic extends Document {
  name: string;
  governorate: string;
  specialization: string;
  address: string;
  phone: string;
  email: string;
  status: string;
  logoImage: string;
  appointments: Schema.Types.ObjectId[];
  medicalRecords: Schema.Types.ObjectId[];
  medications: Schema.Types.ObjectId[];
  patients: Schema.Types.ObjectId[];
  surgerys: Schema.Types.ObjectId[];
  tests: Schema.Types.ObjectId[];
  createdAt: Date;
}

const clinicSchema = new Schema({
  name: { type: String, required: true },
  governorate: { type: String },
  specialization: { type: String },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  status: { type: String, required: true },
  logoImage: { type: String },
  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  medicalRecords: [{ type: Schema.Types.ObjectId, ref: "MedicalRecord" }],
  medications: [{ type: Schema.Types.ObjectId, ref: "Medication" }],
  patients: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
  surgerys: [{ type: Schema.Types.ObjectId, ref: "Surgery" }],
  tests: [{ type: Schema.Types.ObjectId, ref: "Test" }],
  createdAt: { type: Date, default: Date.now },
});

const Clinic = models.Clinic || model("Clinic", clinicSchema);

export default Clinic;
