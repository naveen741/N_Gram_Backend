"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninService = void 0;
const common_1 = require("@nestjs/common");
let SigninService = class SigninService {
    create(createSigninInput) {
        return 'This action adds a new signin';
    }
    findAll() {
        return `This action returns all signin`;
    }
    findOne(id) {
        return `This action returns a #${id} signin`;
    }
    update(id, updateSigninInput) {
        return `This action updates a #${id} signin`;
    }
    remove(id) {
        return `This action removes a #${id} signin`;
    }
};
SigninService = __decorate([
    (0, common_1.Injectable)()
], SigninService);
exports.SigninService = SigninService;
//# sourceMappingURL=signin.service.js.map