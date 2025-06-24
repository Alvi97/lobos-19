import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-spec-item',
  imports: [],
  standalone: true,
  templateUrl: './spec-item.component.html',
  styleUrl: './spec-item.component.css'
})
export class SpecItemComponent {
  @Input() icon!: string | undefined;
  @Input() label!: string;
  @Input() value!: string;

}
