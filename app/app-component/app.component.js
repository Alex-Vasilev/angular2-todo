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
var Item = (function () {
    function Item(purchase) {
        this.purchase = purchase;
        this.done = false;
        this.hide = false;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.editMode = false;
        this.items = [
            { purchase: "Learn JavaScript", done: false, hide: false },
            { purchase: "Learn Angular", done: false, hide: false },
            { purchase: "To have a beer", done: true, hide: false },
            { purchase: "Walking with a dog", done: false, hide: false }
        ];
    }
    AppComponent.prototype.addItem = function (text) {
        console.log(2);
        console.log(text);
        if (text == null || text == undefined || text.trim() == "")
            return;
        this.items.push(new Item(text));
    };
    ;
    AppComponent.prototype.deleteTodo = function (index) {
        this.items.splice(index, 1);
        console.log(this.addTextItem);
    };
    ;
    AppComponent.prototype.deleteSelectedTodos = function () {
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items.splice(i, 1);
            }
        }
    };
    ;
    AppComponent.prototype.countPluralize = function () {
        var counter = 0;
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                counter++;
            }
        }
        return counter;
    };
    ;
    AppComponent.prototype.showAllTodos = function () {
        for (var i = (this.items.length - 1); i > -1; i--) {
            this.items[i].hide = false;
        }
    };
    ;
    AppComponent.prototype.showActiveTodos = function () {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    };
    ;
    AppComponent.prototype.showCompletedTodos = function () {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    };
    ;
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppComponent.prototype, "addTextItem", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app-component/AppComponent.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map