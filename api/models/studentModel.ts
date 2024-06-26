import mongoose, { Schema, Document } from "mongoose";

export interface Student extends Document {
  name: string;
  email: string;
  password: string;
  phone: number;
  dob?: Date;
  gender?: string;
  guardianName?: string;
  guardianPhone?: number;
  class?: string;
  section?: string;
  admission: boolean;
}

const studentSchema: Schema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number },
  dob: { type: Date },
  gender: { type: String },
  guardianName: { type: String },
  guardianPhone: { type: Number },
  class: { type: String },
  section: { type: String },
  admission: { type: Boolean, default: false },
});

export default mongoose.model<Student>("Student", studentSchema);
