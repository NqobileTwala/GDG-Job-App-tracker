import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-signup',
    imports: [FormsModule, RouterLink],
    templateUrl: './signup.component.html'
})

export class Signup{
    private authService = inject(AuthService);
    private router = inject(Router);

    email = '';
    password = '';

    errorMessage = '';
    isSubmitting = false;

    async onSubmit() {
        this.errorMessage = '';
        this.isSubmitting = true;

        try {
            await this.authService.signUp(this.email, this.password);
            this.router.navigate(['/dashboard']);
        } catch(err){
            this.errorMessage = 'Failed to create account. Please try again.';
        } finally {
            this.isSubmitting = false;
        }
    }
}