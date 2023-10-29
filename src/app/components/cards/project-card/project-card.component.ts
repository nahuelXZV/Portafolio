import { Component, Input } from '@angular/core';
import { ProjectCard } from 'src/app/interfaces/project-card.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input() project!: ProjectCard;
}
