import mongoose from 'mongoose';

const TimesheetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  week_start: { type: Date, required: true },
  status: { type: String, enum: ['draft', 'submitted', 'approved', 'rejected'], default: 'draft' },
  timeEntries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TimeEntry' }]
}, { timestamps: true });

export default mongoose.model('Timesheet', TimesheetSchema);
