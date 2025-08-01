import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

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
  headline: string = "HEADLINE_SECTION";
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
    {
      id: 3,
      translationKey: "TESTIMONIALS.FINN",
      author: "Finn Grünhage",
      role: "Kochwelt",
      gitHubLink: "https://github.com/Ysidr"
    }
  ];
  currentIndex = 0;
  translateValue = '0';
  isTransitioning = false;
  isPositionChanging = false;
  
  nextCard(): void {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.isPositionChanging = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.isPositionChanging = false;
    }, 100);
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  } 
  
  prevCard(): void {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.isPositionChanging = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      this.isPositionChanging = false;
    }, 100);
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  } 
  
  goToCard(index: number): void {
    if (this.isTransitioning || this.currentIndex === index) return;
    this.isTransitioning = true;
    this.isPositionChanging = true;
    setTimeout(() => {
      this.currentIndex = index;
      this.isPositionChanging = false;
    }, 100);
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
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
