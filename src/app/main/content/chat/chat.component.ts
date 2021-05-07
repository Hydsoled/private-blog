import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollBar') private scrl: ElementRef;
  messages = [
    {
      who: 1,
      text: 'gamarjoba samyaro'
    }
  ];
  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  onSubmit(msg: NgForm): void {
    let who = 0;
    let messageText = msg.form.value.msg;
    if (messageText.includes('/him')) {
      who = 1;
      messageText = messageText.replace('/him', '');
    }
    this.messages.push({
      who: who,
      text: messageText
    });
    msg.reset();
  }

  scrollToBottom(): void {
    this.scrl.nativeElement.scrollTop = this.scrl.nativeElement.scrollHeight;
  }

}
