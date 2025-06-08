"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TimesheetSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    week_start: { type: Date, required: true },
    status: { type: String, enum: ['draft', 'submitted', 'approved', 'rejected'], default: 'draft' },
    timeEntries: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'TimeEntry' }]
}, { timestamps: true });
exports.default = mongoose_1.default.model('Timesheet', TimesheetSchema);
