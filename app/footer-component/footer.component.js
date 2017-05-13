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
var FooterComponent = (function () {
    function FooterComponent() {
        this.showAllItemsTodosEvent = new core_1.EventEmitter();
        this.showActiveItemsTodosEvent = new core_1.EventEmitter();
        this.showCompletedItemsTodosEvent = new core_1.EventEmitter();
        this.deleteSelectedItemsTodosEvent = new core_1.EventEmitter();
        this.showMethod = 'showAllTodosEvent';
    }
    FooterComponent.prototype.showAllTodosEvent = function () {
        this.showAllItemsTodosEvent.emit();
        this.showMethod = 'showAllTodosEvent';
    };
    FooterComponent.prototype.showActiveTodosEvent = function () {
        this.showActiveItemsTodosEvent.emit();
        this.showMethod = 'showActiveItemsTodosEvent';
    };
    FooterComponent.prototype.showCompletedTodosEvent = function () {
        this.showCompletedItemsTodosEvent.emit();
        this.showMethod = 'showCompletedItemsTodosEvent';
    };
    FooterComponent.prototype.deleteSelectedTodosEvent = function () {
        this.deleteSelectedItemsTodosEvent.emit();
    };
    return FooterComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "showAllItemsTodosEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "showActiveItemsTodosEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "showCompletedItemsTodosEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "deleteSelectedItemsTodosEvent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FooterComponent.prototype, "countTodosPluralize", void 0);
FooterComponent = __decorate([
    core_1.Component({
        selector: 'my-app-footer',
        templateUrl: 'app/footer-component/FooterComponent.html'
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map