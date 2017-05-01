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
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.addTextItem = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.addItemToList = function (model) {
        this.addTextItem.emit(model);
    };
    return HeaderComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "addTextItem", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'my-app-header',
        templateUrl: 'app/header-component/HeaderComponent.html'
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map