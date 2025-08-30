import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCardContainerComponent } from './message-card-container.component';

describe('MessageCardContainerComponent', () => {
  let component: MessageCardContainerComponent;
  let fixture: ComponentFixture<MessageCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
