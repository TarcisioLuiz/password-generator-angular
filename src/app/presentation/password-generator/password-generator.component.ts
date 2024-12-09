import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordGeneratorForm } from './password-generator-form';
import { PasswordRepository } from '../../repository/password.repository';
import { PasswordDto } from '../../domain/dto/password.dto';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css'
})
export class PasswordGeneratorComponent implements OnInit {
  public password = signal('')
  private passwordDto: PasswordDto
  public errorMessage = ''

  public generatorForm = inject(PasswordGeneratorForm)
  private passwordRepository = inject(PasswordRepository)

  ngOnInit(): void {
    this.generatePassword()
  }

  generatePassword() {
    this.passwordDto = this.generatorForm.value
    this.validatePasswordLength(this.passwordDto)
    if (this.allcheckBoxUnselected(this.passwordDto)) {
      this.passwordRepository.generatePassword(this.passwordDto).subscribe(value => {
        this.password.set(value.password)
        this.generatorForm.reset
      })
    } else {
      this.errorMessage = 'select at least one option'
    }
  }

  allcheckBoxUnselected(dto: PasswordDto): boolean {
    return dto.lowercase || dto.number || dto.specialChar || dto.uppercase
  }

  validatePasswordLength(dto: PasswordDto): void {
    if (dto.passwordLength < 1) {
      this.passwordDto.passwordLength = 1
    } else if (dto.passwordLength > 50) {
      this.passwordDto.passwordLength = 50
    }
  }
}
