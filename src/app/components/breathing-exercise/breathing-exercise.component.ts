import { Component } from '@angular/core';

@Component({
  selector: 'app-breathing-exercise',
  templateUrl: './breathing-exercise.component.html',
  styleUrls: ['./breathing-exercise.component.css']
})
export class BreathingExerciseComponent {
  exerciseMessage: string = '';
  timer: number = 0;
  showTimer: boolean = false;
  startDisabled: boolean = false;
  exerciseCompleted: boolean = false;
  progressWidth: number = 0;
  currentExerciseImage: string = 'assets/Images/start-image.gif'; // Initial image
  isExerciseInProgress: boolean = false;

  private intervalId: any;
  private totalTime: number = 5 * 60; // Total time for the exercise in seconds
  private elapsedTime: number = 0; // Time elapsed since the start of the exercise

  toggleExercise(): void {
    if (this.isExerciseInProgress) {
      this.pauseExercise();
    } else {
      this.startExercise();
    }
    this.isExerciseInProgress = !this.isExerciseInProgress;
  }

  startExercise(): void {
    this.exerciseMessage = 'Inhale';
    this.currentExerciseImage = 'assets/Images/inhale-image.gif';
    this.timer = 4; // Starting with inhale time
    this.showTimer = true;
    this.startDisabled = true;
    this.exerciseCompleted = false;
    this.progressWidth = 0;
    this.elapsedTime = 0;

    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer(): void {
    if (this.timer === 0) {
      if (this.exerciseMessage === 'Inhale') {
        this.exerciseMessage = 'Exhale';
        this.currentExerciseImage = 'assets/Images/exhale-image.gif';
        this.timer = 6; // Exhale time
      } else {
        this.exerciseMessage = 'Inhale';
        this.currentExerciseImage = 'assets/Images/inhale-image.gif';
        this.timer = 4; // Inhale time again
      }
    } else {
      this.timer--;
    }

    this.elapsedTime++;
    this.progressWidth = (this.elapsedTime / this.totalTime) * 100;

    if (this.elapsedTime >= this.totalTime) {
      this.completeExercise();
    }
  }

  pauseExercise(): void {
    clearInterval(this.intervalId);
    // Optionally, handle pause logic such as saving the current state
  }

  completeExercise(): void {
    clearInterval(this.intervalId);
    this.exerciseMessage = '';
    this.showTimer = false;
    this.startDisabled = false;
    this.isExerciseInProgress = false;
    this.exerciseCompleted = true;
    this.currentExerciseImage = 'assets/Images/complete-image.gif'; // Image for completion
  }

  restartExercise(): void {
    clearInterval(this.intervalId);
    this.exerciseMessage = '';
    this.timer = 0;
    this.showTimer = false;
    this.startDisabled = false;
    this.isExerciseInProgress = false;
    this.exerciseCompleted = false;
    this.progressWidth = 0;
    this.currentExerciseImage = 'assets/Images/start-image.gif'; // Reset to initial image
  }
}
