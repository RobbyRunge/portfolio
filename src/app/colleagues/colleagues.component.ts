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
      testimonial: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam neque dignissimos tenetur officiis excepturi et distinctio deserunt, quam harum minus.",
      author: "T.Test",
      role: "Team Partner"
    },
    {
      id: 1,
      testimonial: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam neque dignissimos tenetur officiis excepturi et distinctio deserunt, quam harum minus.",
      author: "T.Test",
      role: "Team Partner"
    },
    {
      id: 2,
      testimonial: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam neque dignissimos tenetur officiis excepturi et distinctio deserunt, quam harum minus.",
      author: "T.Test", 
      role: "Team Partner"
    }
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
    
    if (this.testimonials.length <= 3) {
      if ((this.currentIndex === 0 && cardId === this.testimonials.length - 1) || 
          (cardId === this.currentIndex - 1)) {
        return 'left';
      }
      if ((this.currentIndex === this.testimonials.length - 1 && cardId === 0) || 
          (cardId === this.currentIndex + 1)) {
        return 'right';
      }
    }
    
    const diff = (cardId - this.currentIndex + this.testimonials.length) % this.testimonials.length;
    if (diff === this.testimonials.length - 1 || diff < this.testimonials.length / 2) {
      return 'left';
    } else {
      return 'right';
    }
  }
}
