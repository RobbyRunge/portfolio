import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

interface TechItem {
  icon: string;
  name: string;
}

interface Project {
  id: number;
  titleNumber: string;
  title: string;
  description: string;
  techStack: TechItem[];
  imageSrc?: string;
  githubLink?: string;
  liveTestLink?: string;
  inProgress?: boolean;
}

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent implements OnInit, OnDestroy {
  showOverlay = false;
  currentProject: Project | null = null;
  private langChangeSubscription: Subscription | null = null;

  projects: Project[] = [
    {
      id: 1,
      titleNumber: '01',
      title: 'Join',
      description: 'Webbasierte Kanban-App zur Aufgabenverwaltung: Nutzer können Aufgaben in interaktiven Listen erstellen, organisieren und verfolgen – ideal für Einzelpersonen oder Teams.',
      techStack: [
        { icon: 'assets/imgs/featured-projects/html-tech.png', name: 'HTML' },
        { icon: 'assets/imgs/featured-projects/css-tech.png', name: 'CSS' },
        { icon: 'assets/imgs/featured-projects/javascript-tech.png', name: 'JavaScript' },
        { icon: 'assets/imgs/featured-projects/firebase-tech.png', name: 'Firebase' }
      ],
      imageSrc: 'assets/imgs/featured-projects/join.png',
      githubLink: 'https://github.com/RobbyRunge/join-groupwork',
      liveTestLink: 'https://robby-runge.de/join/index.html'
    },
    {
      id: 2,
      titleNumber: '02',
      title: 'Sharkie',
      description: 'Sharkie ist ein 2D-Spiel, das mit HTML, JavaScript und CSS entwickelt wurde. Das Spiel bietet ein spannendes Unterwasserabenteuer, bei dem die Spieler einen Hai steuern, der durch verschiedene Hindernisse und Herausforderungen navigiert.',
      techStack: [
        { icon: 'assets/imgs/featured-projects/html-tech.png', name: 'HTML' },
        { icon: 'assets/imgs/featured-projects/css-tech.png', name: 'CSS' },
        { icon: 'assets/imgs/featured-projects/javascript-tech.png', name: 'JavaScript' }
      ],
      imageSrc: 'assets/imgs/featured-projects/sharkie.png',
      githubLink: 'https://github.com/RobbyRunge/sharkie',
      liveTestLink: 'https://robby-runge.de/sharkie/index.html'
    },
    {
      id: 3,
      titleNumber: '03',
      title: 'DA Bubble',
      description: 'Diese App ist ein Slack Clone App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeitnachrichten und robuster Kanalorganisation.',
      techStack: [
        { icon: 'assets/imgs/featured-projects/html-tech.png', name: 'HTML' },
        { icon: 'assets/imgs/featured-projects/css-tech.png', name: 'CSS' },
        { icon: 'assets/imgs/featured-projects/angular-tech.png', name: 'Angular' },
        { icon: 'assets/imgs/featured-projects/typescript-tech.png', name: 'TypeScript' },
        { icon: 'assets/imgs/featured-projects/firebase-tech.png', name: 'Firebase' }
      ],
      imageSrc: 'assets/imgs/featured-projects/dabubble.png',
      githubLink: 'https://github.com/Mihael0599/DaBubble',
      liveTestLink: '',
      inProgress: true
    }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.initializeProjects();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.initializeProjects();
      this.updateCurrentProject();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  initializeProjects() {
    for (const project of this.projects) {
      const projectKey = this.getProjectKeyById(project.id);
      if (projectKey) {
        this.translate.get(`PROJECTS.${projectKey}.DESCRIPTION`)
          .subscribe(description => {
            project.description = description;
          });
      }
    }
  }

  openProject(projectId: number): void {
    this.currentProject = this.projects.find(p => p.id === projectId) || null;
    this.updateCurrentProject();
    this.showOverlay = true;
    document.body.style.overflow = 'hidden';
  }

  closeOverlay(): void {
    this.showOverlay = false;
    document.body.style.overflow = '';
  }

  nextProject(): void {
    if (!this.currentProject) return;

    const currentIndex = this.projects.findIndex(p => p.id === this.currentProject!.id);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.currentProject = this.projects[nextIndex];
  }

  updateProjectContent() {
    if (this.currentProject) {
      const projectKey = this.getProjectKeyById(this.currentProject.id);
      if (projectKey) {
        this.translate.get(`PROJECTS.${projectKey}.DESCRIPTION`).subscribe(desc => {
          if (this.currentProject) {
            this.currentProject.description = desc;
          }
        });
      }
    }
  }

  updateCurrentProject() {
    if (this.currentProject) {
      const projectKey = this.getProjectKeyById(this.currentProject.id);
      if (projectKey) {
        this.translate.get(`PROJECTS.${projectKey}.DESCRIPTION`)
          .subscribe(description => {
            if (this.currentProject) {
              this.currentProject.description = description;
            }
          });
      }
    }
  }

  openGitHub() {
    if (this.currentProject?.githubLink) {
      window.open(this.currentProject.githubLink, '_blank');
    }
  }

  openLiveTest() {
    if (this.currentProject?.liveTestLink) {
      window.open(this.currentProject.liveTestLink, '_blank');
    }
  }

  private getProjectKeyById(id: number): string {
    switch (id) {
      case 1: return 'JOIN';
      case 2: return 'SHARKIE';
      case 3: return 'DABUBBLE';
      default: return '';
    }
  }
}