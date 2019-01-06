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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Statistic = class Statistic extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Statistic.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        length: 128,
        nullable: false
    }),
    __metadata("design:type", String)
], Statistic.prototype, "who", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bigint',
        unsigned: true,
        nullable: false
    }),
    __metadata("design:type", Number)
], Statistic.prototype, "when", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        length: 255,
        nullable: false
    }),
    __metadata("design:type", String)
], Statistic.prototype, "where", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        length: 32,
        nullable: false
    }),
    __metadata("design:type", String)
], Statistic.prototype, "what", void 0);
Statistic = __decorate([
    typeorm_1.Entity()
], Statistic);
exports.Statistic = Statistic;
exports.default = Statistic;
