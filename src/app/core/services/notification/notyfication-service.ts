import { Service, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Service()
export class NotyficationService 
{
    private readonly snackBar = inject(MatSnackBar);

  success(message: string): void {
    this.snackBar.open(message, 'OK', {
      // duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['notification-success']
    });
  }

  error(message: string): void {
    this.snackBar.open(message, 'OK', {
      // duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['notification-error']
    });
  }

  warning(message: string): void {
    this.snackBar.open(message, 'OK', {
      // duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['notification-warning']
    });
  }

  info(message: string): void {
    this.snackBar.open(message, 'OK', {
      // duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['notification-info']
    });
  }
}
