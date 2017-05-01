import {Output, Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'my-app-header',
    templateUrl: 'app/header-component/HeaderComponent.html'
})
export class HeaderComponent {
    @Output() addTextItem = new EventEmitter<string>();
    addItemToList(model: string) {
        this.addTextItem.emit(model);
    }
}