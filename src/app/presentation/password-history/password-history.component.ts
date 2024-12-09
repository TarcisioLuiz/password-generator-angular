import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Password } from '../../domain/password';
import { PasswordRepository } from '../../repository/password.repository';

@Component({
  selector: 'app-password-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-history.component.html',
  styleUrl: './password-history.component.css',
  providers: [DatePipe]
})
export class PasswordHistoryComponent implements OnInit {
  passwordList: Password[]

  private passwordRepository = inject(PasswordRepository)

  ngOnInit(): void {
    this.passwordRepository.retrievePasswords().subscribe(
      data => {
        this.passwordList = data;
      }
    )
  }
}
