import { Component, Input } from '@angular/core';
import { ExperienceCard } from 'src/app/interfaces/experience-card.interface';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
})
export class ExperienceCardComponent {

  @Input()
  experience!: ExperienceCard;

  constructor() { }

}
