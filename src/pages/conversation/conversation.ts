import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'conversation',
	templateUrl: 'conversation.html'
})
export class ConversationPage {

	conversationList: any[];

	constructor(public navCtrl: NavController){

		this.conversationList = [
			{

				messageType: 'Send',
				timeConversation: '12:30pm',
				msgContent: 'This is the content of this message, This is the content of this message This is the content of this message This is the content of this message'
			},
			{
				messageType: 'Receive',
				timeConversation: 'time',
				msgContent: 'This is the content of this message, This is the content of this message This is the content of this message This is the content of this message'
			},
			{
				messageType: 'Receive',
				timeConversation: 'time',
				msgContent: 'This is the content of this message, This is the content of this message This is the content of this message This is the content of this message This is the content of this message This is the content of this message This is the content of this message This is the content of this message'
			}
		];

	}
}