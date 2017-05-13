import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'my-app-footer',
    templateUrl: 'app/footer-component/FooterComponent.html'
})
export class FooterComponent {
    @Output() showAllItemsTodosEvent = new EventEmitter<any>();
    @Output() showActiveItemsTodosEvent = new EventEmitter<any>();
    @Output() showCompletedItemsTodosEvent = new EventEmitter<any>();
    @Output() deleteSelectedItemsTodosEvent = new EventEmitter<any>();
    
    @Input() countTodosPluralize: number;
    
    showMethod = 'showAllTodosEvent';

    showAllTodosEvent() {
        this.showAllItemsTodosEvent.emit();
        this.showMethod = 'showAllTodosEvent';
    } 
    
    showActiveTodosEvent () {
        this.showActiveItemsTodosEvent.emit();
        this.showMethod = 'showActiveItemsTodosEvent';
    } 
    
    showCompletedTodosEvent () {
        this.showCompletedItemsTodosEvent.emit();
        this.showMethod = 'showCompletedItemsTodosEvent';
    } 
    
    deleteSelectedTodosEvent () {
        this.deleteSelectedItemsTodosEvent.emit();
    } 
    
}