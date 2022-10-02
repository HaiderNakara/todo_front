import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskStorageService } from "../task-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  title = new FormControl('');
  note = new FormControl('');
  constructor(private storage: TaskStorageService, private router: Router) {
  }
  createTask() {
    this.storage.createTodo(
      this.title.value, this.note.value,
    );
    this.router.navigate(['/tasks'])
  }
}
