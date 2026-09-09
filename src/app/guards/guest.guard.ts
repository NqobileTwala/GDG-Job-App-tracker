import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthService } from '../services/auth';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = ()=> {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.currentUser$?.pipe(
        take(1),
        map((user) => (user ? router.createUrlTree(['/dashboard']) : true))
    )
}