import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  icon: string;
  name: string;
}

interface Project {
  id: number;
  titleNumber: string;
  title: string;
  description: string;
  techStack: TechItem[]; // Replace technologies string[] with this
  imageSrc?: string;
  githubLink?: string;
  liveTestLink?: string;
  inProgress?: boolean;
}

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  showOverlay = false;
  currentProject: Project | null = null;

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
      imageSrc: 'assets/imgs/featured-projects/join-hover.png',
      githubLink: 'https://github.com/RobbyRunge/join-groupwork',
      liveTestLink: ''
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
      imageSrc: 'assets/imgs/featured-projects/sharkie-hover.png',
      githubLink: 'https://github.com/RobbyRunge/sharkie',
      liveTestLink: ''
    },
    {
      id: 3,
      titleNumber: '03',
      title: 'DA Bubble',
      description: 'Diese App ist ein Slack Clone App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeitnachrichten und robuster Kanalorganisation.',
      techStack: [
        { icon: 'assets/imgs/featured-projects/html-tech.png', name: 'HTML' },
        { icon: 'assets/imgs/featured-projects/css-tech.png', name: 'CSS' },
        { icon: 'assets/imgs/featured-projects/javascript-tech.png', name: 'JavaScript' },
        { icon: 'assets/imgs/featured-projects/firebase-tech.png', name: 'Firebase' }
      ],
      githubLink: '',
      liveTestLink: '',
      inProgress: true
    }
  ];

  openProject(projectId: number): void {
    this.currentProject = this.projects.find(p => p.id === projectId) || null;
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
}