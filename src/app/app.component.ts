import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODES } from './modes';
import { SuperTableComponent } from '../project/super-table/super-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'super-table-demo';
     modes = MODES;
  activeMode: any = null;

  selectMode(mode: any) {
    this.activeMode = null; // destroy
    setTimeout(() => {
      this.activeMode = mode; // recreate
    });
  }

}
