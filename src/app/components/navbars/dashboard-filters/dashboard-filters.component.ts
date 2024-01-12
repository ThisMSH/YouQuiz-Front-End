import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-dashboard-filters',
    templateUrl: './dashboard-filters.component.html',
    styleUrls: ['./dashboard-filters.component.css'],
})
export class DashboardFiltersComponent {
    @ViewChild('filtersContainer') filetrsContainer!: ElementRef;
    @Input() search!: string;
    @Input() customClass: string = 'relative p-6 sticky top-4';
    @Output() searchChange = new EventEmitter<string>();

    openFilters(): void {
        let timeOut;
        this.filetrsContainer.nativeElement.classList.toggle('grid-rows-[1fr]');

        if (this.filetrsContainer.nativeElement.classList.contains('child:overflow-hidden')) {
            timeOut = setTimeout(() => {
                this.filetrsContainer.nativeElement.classList.remove('child:overflow-hidden');
                this.filetrsContainer.nativeElement.classList.add('child:overflow-visible');
            }, 300);
        } else {
            clearTimeout(timeOut);
            this.filetrsContainer.nativeElement.classList.add('child:overflow-hidden');
            this.filetrsContainer.nativeElement.classList.remove('child:overflow-visible');
        }
    }

    onSearchChange(evt: string): void {
        this.search = evt;
        this.searchChange.emit(this.search);
    }
}
