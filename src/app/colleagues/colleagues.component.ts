import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  testimonial: string;
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
      testimonial: "Robby ist für mich ein guter Mitarbeiter im Team. Er ist sehr organisiert und hat stets dazu beigetragen, eine gute Atmosphäre im Team aufrechtzuerhalten. Auf jeden Fall war es eine positive Erfahrung, ein Projekt mit ihm umsetzen zu dürfen.",
      author: "Arnesto",
      role: "Kochwelt",
      gitHubLink: "https://github.com/Arnesto-maker"
    },
    {
      id: 1,
      testimonial: "Mit Robby zu arbeiten war immer sehr angenehm. Er bringt nicht nur technisches Know-how mit, sondern überzeugt auch durch seine ruhige und lösungsorientierte Art – eine echte Stärkung für jedes Team. Besonders schätze ich seine Verlässlichkeit: Wenn Robby etwas übernimmt, kann man sich zu 100 % darauf verlassen, dass es pünktlich und in hoher Qualität erledigt wird.",
      author: "Aldin Dobric",
      role: "Join",
      gitHubLink: "https://github.com/D-Aldin"
    },
    {
      id: 2,
      testimonial: "Die Zusammenarbeit mit Robby war nicht nur äußerst effektiv, sondern auch stets von Vertrauen und Klarheit geprägt. Als echter Teamplayer überzeugt er durch seine Zuverlässigkeit, strukturierte Arbeitsweise und sein Gespür für gemeinsame Ziele. Besonders beeindruckt hat mich, wie er selbst in herausfordernden Situationen den Überblick behält und das Team motivierend begleitet.",
      author: "Peter Trözmüller",
      role: "Kochwelt",
      gitHubLink: "https://github.com/PeterTr-ust"
    },
  ];

  currentIndex = 1;
  translateValue = '0';
  isTransitioning = false;

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
