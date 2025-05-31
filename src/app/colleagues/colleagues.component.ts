import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../shared/translation.service';

interface Testimonial {
  id: number;
  translationKey: string;
  author: string;
  role: string;
  gitHubLink: string;
}

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.scss']
})
export class ColleaguesComponent {
  testimonials: Testimonial[] = [
    {
      id: 0,
      translationKey: "TESTIMONIALS.ARNESTO",
      author: "Arnesto",
      role: "Kochwelt",
      gitHubLink: "https://github.com/Arnesto-maker"
    },
    {
      id: 1,
      translationKey: "TESTIMONIALS.ALDIN",
      author: "Aldin Dobric",
      role: "Join",
      gitHubLink: "https://github.com/D-Aldin"
    },
    {
      id: 2,
      translationKey: "TESTIMONIALS.PETER",
      author: "Peter Trözmüller",
      role: "Kochwelt",
      gitHubLink: "https://github.com/PeterTr-ust"
    },
  ];

  currentIndex = 1;
  translateValue = '0';
  isTransitioning = false;

  constructor(
    private translationService: TranslationService,
    private translateService: TranslateService
  ) {}

  nextCard(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  prevCard(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  goToCard(index: number): void {
    if (this.isTransitioning || this.currentIndex === index) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  getCardPosition(cardId: number): string {
    if (cardId === this.currentIndex) return 'active';

    const totalCards = this.testimonials.length;

    const prevCardId = (this.currentIndex - 1 + totalCards) % totalCards;
    const nextCardId = (this.currentIndex + 1) % totalCards;

    if (cardId === prevCardId) {
      return 'left';
    } else if (cardId === nextCardId) {
      return 'right';
    } else {
      return 'hidden';
    }
  }
}
