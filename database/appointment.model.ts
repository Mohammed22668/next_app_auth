import { Schema, models, model, Document } from "mongoose";

export interface IAppointment extends Document {
  clinicId: Schema.Types.ObjectId; //
  patientId: Schema.Types.ObjectId;
  doctorName: string;
  appointmentDate: Date;
  reason: string;
  price: number;
  medications: Schema.Types.ObjectId[];
  tests: Schema.Types.ObjectId[];
  surgery: Schema.Types.ObjectId[];
  notes: string;
  createdAt: Date;
}

const AppointmentSchema = new Schema({
  clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
  patientId: { type: Schema.Types.ObjectId, ref: "Patient" },
  doctorName: { type: String },
  appointmentDate: { type: Date },
  reason: { type: String },
  price: { type: Number },
  medications: [{ type: Schema.Types.ObjectId, ref: "Medication" }], // Medication : الادوية
  tests: [{ type: Schema.Types.ObjectId, ref: "Test" }], // الفحوصات
  surgery: { type: Schema.Types.ObjectId, ref: "Surgery" }, // العمليات الجراحية
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Appointment =
  models.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;

// Usage: الحجوزات
