"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['employee', 'manager'], default: 'employee' },
    manager_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });
exports.default = mongoose_1.default.model('User', UserSchema);
