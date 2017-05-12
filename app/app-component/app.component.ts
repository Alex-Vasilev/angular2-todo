import {Component, Input} from '@angular/core';

export class Item {
    purchase: string;
    done: boolean;
    hide: boolean;
    editMode: boolean;
    

    constructor(purchase: string) {
        this.purchase = purchase;
        this.done = false;
        this.hide = false;
        this.editMode = false;
    }
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app-component/AppComponent.html'
})

export class AppComponent {
    @Input() addTextItem: string;
    olldItemTxt = '';
    items: Item[] =
    [
        {purchase: "Learn JavaScript", done: false, hide: false, editMode: false},
        {purchase: "Learn Angular", done: false, hide: false, editMode: false},
        {purchase: "To have a beer", done: true, hide: false, editMode: false},
        {purchase: "Walking with a dog", done: false, hide: false, editMode: false}
    ];

    addItem(text: string): void {
        if (text == null || text == undefined || text.trim() == "")
            return;
        this.items.push(new Item(text));
    }

    deleteTodo(index: number) {
        this.items.splice(index, 1);
    }

    deleteSelectedTodos() {
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items.splice(i, 1);
            }
        }
    }

    countPluralize() {
        var counter = 0;
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                counter++;
            }
        }
        return counter;
    }

    showAllTodos() {
        for (var i = (this.items.length - 1); i > -1; i--) {
            this.items[i].hide = false;
        }
    }

    showActiveTodos() {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    }

    showCompletedTodos() {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    }

    allDone() {
        for (var i = (this.items.length - 1); i > -1; i--) {
            this.items[i].done = true;
        }
    }

    enterEditMode(index: number, element: HTMLInputElement) {
        this.items[index].editMode = true;
        setTimeout(() => {
                element.focus();
                this.olldItemTxt = element.value
        }, 0);
    }

    cancelEdit(index: number, element: HTMLInputElement) {
        this.items[index].editMode = false;
        element.value = this.olldItemTxt;
    }

    commitEdit(index: number, updatedText: string) {
        this.items[index].editMode = false;
        this.items[index].purchase = updatedText;
    }
}