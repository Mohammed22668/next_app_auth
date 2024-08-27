import { models, model, Schema, Document } from "mongoose";

export interface ITest extends Document {
  clinicId: Schema.Types.ObjectId; //
  name: string;
  result: string;
  datePerformed: Date;
}

const TestSchema = new Schema({
  clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
  name: { type: String, required: true },
  result: { type: String, required: true },
  datePerformed: { type: Date, required: true },
});

const Test = models.Test || model("Test", TestSchema);

export default Test;

// usage : يستخدم لاضافة الفحوصات
