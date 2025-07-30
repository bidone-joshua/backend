"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
describe('E2E: GET /hello from live server', () => {
    it('should return Hello, world!', async () => {
        const res = await axios_1.default.get('http://134.33.248.254/hello'); // get using kubectl get svc
        expect(res.status).toBe(200);
        expect(res.data).toEqual({ message: 'Hello, world!' });
    });
});
