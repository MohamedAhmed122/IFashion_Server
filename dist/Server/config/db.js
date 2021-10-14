"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const connection = yield mongoose_1.default.connect(process.env.MONGO_URI, {
        // useNewUrlParser: true, 
        // useUnifiedTopology: true,
        // useCreateIndex: true
        });
        console.log(`mongodb connected on ${connection.connection.host}`.cyan.underline);
    }
    catch (error) {
        console.log(`Error is comming from mongo connection ${error.message}`.red.bold);
        process.exit(1);
    }
});
exports.default = connectDB;
//# sourceMappingURL=db.js.map