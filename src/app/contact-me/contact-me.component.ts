import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  http = inject(HttpClient)
  showPrivacyPolicy = false;

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  };

  privacyTouched = false;
  formSubmitted = false;

  post = {
    endPoint: 'https://robby-runge.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(
    private translationService: TranslationService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.privacyTouched = false;
    this.formSubmitted = false;
  }

  onPrivacyClick() {
    this.privacyTouched = true;
  }

  openPrivacyPolicy(event: Event): void {
    event.preventDefault();
    this.showPrivacyPolicy = true;
    document.body.style.overflow = 'hidden';
  }

  closePrivacyPolicy(): void {
    this.showPrivacyPolicy = false;
    document.body.style.overflow = '';
  }

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;

    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.privacyTouched = false;
            this.formSubmitted = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
