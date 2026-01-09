import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SuperTableConfig } from './super-table.types';

@Component({
  selector: 'superTable',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './super-table.component.html',
  styleUrl: './super-table.component.scss'
})
export class SuperTableComponent {
  @Input() config!: SuperTableConfig;
  @Input() data: any[] = [];

  @Output() page = new EventEmitter<any>();
  @Output() sort = new EventEmitter<any>();
}
