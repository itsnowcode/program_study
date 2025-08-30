import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageCardComponent } from './message-card/message-card.component';
import { MessageCardContainerComponent } from './message-card-container/message-card-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageCardComponent, MessageCardContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
