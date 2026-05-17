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
  headline = 'HEADLINE_SECTION';

  testimonials: Testimonial[] = [
    { id: 0, translationKey: 'TESTIMONIALS.ARNESTO', author: 'Arnesto', role: 'Kochwelt', gitHubLink: 'https://github.com/Arnesto-maker' },
    { id: 1, translationKey: 'TESTIMONIALS.PETER', author: 'Peter Trözmüller', role: 'Kochwelt', gitHubLink: 'https://github.com/PeterTr-ust' },
    { id: 2, translationKey: 'TESTIMONIALS.FINN', author: 'Finn Grünhage', role: 'Kochwelt', gitHubLink: 'https://github.com/Ysidr' },
    { id: 3, translationKey: 'TESTIMONIALS.ALDIN', author: 'Aldin Dobric', role: 'Join', gitHubLink: 'https://github.com/D-Aldin' },
    { id: 4, translationKey: 'TESTIMONIALS.MIHAEL', author: 'Mihael Drazic', role: 'DaBubble', gitHubLink: 'https://github.com/Mihael0599' },
    { id: 5, translationKey: 'TESTIMONIALS.PRATHAB', author: 'Prathab Kumarakulasingam', role: 'DaBubble', gitHubLink: 'https://github.com/Pradi8' },
  ];

  get marqueeTestimonials(): Testimonial[] {
    return [...this.testimonials, ...this.testimonials];
  }
}
