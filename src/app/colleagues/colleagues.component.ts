import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  testimonial: string;
  author: string;
  role: string;
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
      testimonial: "Robby ist für mich ein guter Mitarbeiter im Team, er ist ein sehr guter Organisation in unserem Team und hat immer beigetragen, das gute Atmosphäre im Team aufrecht zu halten, auf jedem Fall war das ein gutes Erlebnis, ein Projekt mit ihm erledigen zu dürfen",
      author: "Arnesto",
      role: "Kochwelt"
    },
    {
      id: 1,
      testimonial: "Mit Robby zu arbeiten, war immer sehr angenehm. Er bringt nicht nur technisches Know-how mit, sondern auch eine ruhige und lösungsorientierte Art, die jedes Team stärkt. Besonders schätze ich seine Verlässlichkeitwenn Robby etwas übernimmt, kann man sich zu 100 % darauf verlassen, dass es pünktlich und in hoher Qualität erledigt wird.",
      author: "Aldin Dobric",
      role: "Join"
    },
    {
      id: 2,
      testimonial: "Die Zusammenarbeit mit Robby war nicht nur effektiv, sondern auch stets von Vertrauen und Klarheit geprägt. Er ist ein echter Team Player, der durch seine Zuverlässigkeit, strukturierte Arbeitsweise und sein Gespür für gemeinsame Ziele überzeugt. Besonders beeindruckt hat mich, wie er auch in herausfordernden Situationen den Überblick behält und das Team motivierend unterstützt.",
      author: "Peter Trözmüller", 
      role: "Kochwelt"
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
