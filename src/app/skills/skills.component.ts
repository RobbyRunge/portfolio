import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  iconPath: string;
  alt: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'HTML', iconPath: 'assets/imgs/skills/html.png', alt: 'html icon' },
    { name: 'CSS', iconPath: 'assets/imgs/skills/css.png', alt: 'css icon' },
    { name: 'JavaScript', iconPath: 'assets/imgs/skills/javascript.png', alt: 'javascript icon' },
    { name: 'Material Design', iconPath: 'assets/imgs/skills/material-design.png', alt: 'material-design icon' },
    { name: 'TypeScript', iconPath: 'assets/imgs/skills/typescript.png', alt: 'typescript icon' },
    { name: 'Angular', iconPath: 'assets/imgs/skills/angular.png', alt: 'angular icon' },
    { name: 'Firebase', iconPath: 'assets/imgs/skills/firebase.png', alt: 'firebase icon' },
    { name: 'Git', iconPath: 'assets/imgs/skills/git.png', alt: 'git icon' },
    { name: 'Rest-Api', iconPath: 'assets/imgs/skills/rest-api.png', alt: 'rest-api icon' },
    { name: 'Scrum', iconPath: 'assets/imgs/skills/scrum.png', alt: 'scrum icon' },
  ];
}
