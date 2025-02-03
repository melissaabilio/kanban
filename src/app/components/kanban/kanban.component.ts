import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})

export class KanbanComponent {
  columns = [
    { name: 'Para Fazer', tasks: [{ title: 'Tarefa 1' }, { title: 'Tarefa 2' }] },
    { name: 'Em Andamento', tasks: [{ title: 'Tarefa 3' }] },
    { name: 'Concluído', tasks: [{ title: 'Tarefa 4' }] }
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
