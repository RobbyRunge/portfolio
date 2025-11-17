import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  iconPath: string;
  alt: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsFrontend: Skill[] = [
    { name: 'HTML', iconPath: 'assets/imgs/skills/frontend/html.png', alt: 'html icon' },
    { name: 'CSS', iconPath: 'assets/imgs/skills/frontend/css.png', alt: 'css icon' },
    { name: 'JavaScript', iconPath: 'assets/imgs/skills/frontend/javascript.png', alt: 'javascript icon' },
    { name: 'Material Design', iconPath: 'assets/imgs/skills/frontend/material-design.png', alt: 'material-design icon' },
    { name: 'TypeScript', iconPath: 'assets/imgs/skills/frontend/typescript.png', alt: 'typescript icon' },
    { name: 'Angular', iconPath: 'assets/imgs/skills/frontend/angular.png', alt: 'angular icon' },
    { name: 'Firebase', iconPath: 'assets/imgs/skills/frontend/firebase.png', alt: 'firebase icon' },
    { name: 'Git', iconPath: 'assets/imgs/skills/tools/git.png', alt: 'git icon' },
    { name: 'Rest-Api', iconPath: 'assets/imgs/skills/frontend/rest-api.png', alt: 'rest-api icon' },
    { name: 'Scrum', iconPath: 'assets/imgs/skills/tools/scrum.png', alt: 'scrum icon' },
  ];
  skillsBackend: Skill[] = [
    { name: 'Python', iconPath: 'assets/imgs/skills/backend/python.png', alt: 'python icon' },
    { name: 'Django', iconPath: 'assets/imgs/skills/backend/django.png', alt: 'django icon' },
    { name: 'DRF', iconPath: 'assets/imgs/skills/backend/drf.png', alt: 'drf icon' },
    { name: 'PostgreSQL', iconPath: 'assets/imgs/skills/backend/postgresql.png', alt: 'postgresql icon' },
    { name: 'SQL', iconPath: 'assets/imgs/skills/backend/sql.png', alt: 'sql icon' },
    { name: 'Cloud', iconPath: 'assets/imgs/skills/backend/cloud.png', alt: 'cloud icon' },
    { name: 'Docker', iconPath: 'assets/imgs/skills/backend/docker.png', alt: 'docker icon' },
    { name: 'Flask', iconPath: 'assets/imgs/skills/backend/flask.png', alt: 'flask icon' },
    { name: 'Heroku', iconPath: 'assets/imgs/skills/backend/heroku.png', alt: 'heroku icon' },
    { name: 'Redis', iconPath: 'assets/imgs/skills/backend/redis.png', alt: 'redis icon' },
    { name: 'RxJs', iconPath: 'assets/imgs/skills/backend/rxjs.png', alt: 'rxjs icon' },
  ];
}
