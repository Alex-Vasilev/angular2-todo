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

    showAllTodosEvent() {
        this.showAllItemsTodosEvent.emit();
    } 
    
    showActiveTodosEvent () {
        this.showActiveItemsTodosEvent.emit();
    } 
    
    showCompletedTodosEvent () {
        this.showCompletedItemsTodosEvent.emit();
    } 
    
    deleteSelectedTodosEvent () {
        this.deleteSelectedItemsTodosEvent.emit();
    } 
    
}