"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const signin_service_1 = require("./signin.service");
const signin_entity_1 = require("./entities/signin.entity");
const create_signin_input_1 = require("./dto/create-signin.input");
const update_signin_input_1 = require("./dto/update-signin.input");
let SigninResolver = class SigninResolver {
    constructor(signinService) {
        this.signinService = signinService;
    }
    createSignin(createSigninInput) {
        return this.signinService.create(createSigninInput);
    }
    findAll() {
        return this.signinService.findAll();
    }
    findOne(id) {
        return this.signinService.findOne(id);
    }
    updateSignin(updateSigninInput) {
        return this.signinService.update(updateSigninInput.id, updateSigninInput);
    }
    removeSignin(id) {
        return this.signinService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => signin_entity_1.Signin),
    __param(0, (0, graphql_1.Args)('createSigninInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signin_input_1.CreateSigninInput]),
    __metadata("design:returntype", void 0)
], SigninResolver.prototype, "createSignin", null);
__decorate([
    (0, graphql_1.Query)(() => [signin_entity_1.Signin], { name: 'signin' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SigninResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => signin_entity_1.Signin, { name: 'signin' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SigninResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => signin_entity_1.Signin),
    __param(0, (0, graphql_1.Args)('updateSigninInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_signin_input_1.UpdateSigninInput]),
    __metadata("design:returntype", void 0)
], SigninResolver.prototype, "updateSignin", null);
__decorate([
    (0, graphql_1.Mutation)(() => signin_entity_1.Signin),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SigninResolver.prototype, "removeSignin", null);
SigninResolver = __decorate([
    (0, graphql_1.Resolver)(() => signin_entity_1.Signin),
    __metadata("design:paramtypes", [signin_service_1.SigninService])
], SigninResolver);
exports.SigninResolver = SigninResolver;
//# sourceMappingURL=signin.resolver.js.map