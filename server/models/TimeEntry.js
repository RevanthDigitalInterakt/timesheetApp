"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TimeEntrySchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    project: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Project', required: true },
    date: { type: Date, required: true },
    hours: { type: Number, required: true },
    description: { type: String }
}, { timestamps: true });
exports.default = mongoose_1.default.model('TimeEntry', TimeEntrySchema);
