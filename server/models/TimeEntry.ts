import mongoose from 'mongoose';

const TimeEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  date: { type: Date, required: true },
  hours: { type: Number, required: true },
  description: { type: String }
}, { timestamps: true });

export default mongoose.model('TimeEntry', TimeEntrySchema);
