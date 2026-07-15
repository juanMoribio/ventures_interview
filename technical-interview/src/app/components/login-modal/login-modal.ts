import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe
  ],
  templateUrl: './login-modal.html'
})
export class LoginModalComponent {

  private fb = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<LoginModalComponent>);
  hidePassword = true;
  form = this.fb.nonNullable.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]]

  });

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.getRawValue());
    this.dialogRef.close(this.form.getRawValue());
  }

}
