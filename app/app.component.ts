import {Component} from '@angular/core';

export class Item {
    purchase: string;
    done: boolean;
    hide: boolean;

    constructor(purchase: string) {
        this.purchase = purchase;
        this.done = false;
        this.hide = false;
    }
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/AppComponent.html'
})
export class AppComponent {
    editMode = false;
    items: Item[] =
    [
        {purchase: "Learn JavaScript", done: false, hide: false},
        {purchase: "Learn Angular", done: false, hide: false},
        {purchase: "To have a beer", done: true, hide: false},
        {purchase: "Walking with a dog", done: false, hide: false}
    ];
    addItem(text: string): void {
        if (text == null || text == undefined || text.trim() == "")
            return;
        this.items.push(new Item(text));
    };
    deleteTodo(index: number) {
        this.items.splice(index, 1);
    };
    deleteSelectedTodos() {
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items.splice(i, 1);
            }
        }
    };
    countPluralize() {
        var counter = 0;
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                counter++;
            }
        }
        return counter;
    };
    showAllTodos() {
        for (var i = (this.items.length - 1); i > -1; i--) {         
                this.items[i].hide = false;         
        }
    };
    showActiveTodos() {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    };
    showCompletedTodos() {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    };
}