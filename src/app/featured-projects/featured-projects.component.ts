import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  titleNumber: string;
  title: string;
  technologies: string[];
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
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      imageSrc: 'assets/imgs/featured-projects/join-hover.png',
      githubLink: 'https://github.com/RobbyRunge/join-groupwork',
      liveTestLink: ''
    },
    {
      id: 2,
      titleNumber: '02',
      title: 'Sharkie',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageSrc: 'assets/imgs/featured-projects/sharkie-hover.png',
      githubLink: 'https://github.com/RobbyRunge/sharkie',
      liveTestLink: ''
    },
    {
      id: 3,
      titleNumber: '03',
      title: 'DA Bubble',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
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