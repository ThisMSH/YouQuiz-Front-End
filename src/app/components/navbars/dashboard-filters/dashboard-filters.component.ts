import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-dashboard-filters',
    templateUrl: './dashboard-filters.component.html',
    styleUrls: ['./dashboard-filters.component.css'],
})
export class DashboardFiltersComponent {
    @ViewChild('filtersContainer') filetrsContainer!: ElementRef;
    @Input() search!: string;
    @Output() searchChange = new EventEmitter<string>();

    openFilters(): void {
        this.filetrsContainer.nativeElement.classList.toggle('grid-rows-[1fr]');
    }

    onSearchChange(evt: string): void {
        this.search = evt;
        this.searchChange.emit(this.search);
    }
}
