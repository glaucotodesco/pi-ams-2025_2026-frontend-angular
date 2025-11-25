import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    styleUrls: ['./table.css'],
    standalone: false
})
export class Table {
    @Input() columns: string[] = [];
}
