import { Schema, models, model, Document } from "mongoose";

export interface ISurgery extends Document {
  clinicId: Schema.Types.ObjectId; //
  name: string; // name
  datePerformed: Date; // تاريخ العملية
  surgeon: string; // الجراح
  notes: string; // الملاحظات
  createdAt: Date;
}

const SurgerySchema = new Schema({
  clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
  name: { type: String },
  datePerformed: { type: Date },
  surgeon: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Surgery = models.Surgery || model("Surgery", SurgerySchema);

export default Surgery;

// usage : يستخدم لاضافة العمليات التي اجراها المريض من قبل
