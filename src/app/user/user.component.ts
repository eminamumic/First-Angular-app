import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => {
    return `assets/users/` + this.avatar();
  });
  @Input({ required: true }) id!: string;
  // @Output() select = new EventEmitter();
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.id);
  }
}
