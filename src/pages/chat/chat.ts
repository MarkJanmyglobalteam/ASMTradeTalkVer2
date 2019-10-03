import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector:'chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
	NewsEntry:any;
  constructor(public navCtrl: NavController) {
  	

  	this.NewsEntry = [
	  	{
	  		NewsName:'We said ‘Bitcoin $50,000’, and We’re Getting Close',
	  		NewsDesc:'Bitcoin is now clear of US$8,220 — well over AU$10,000. It’s a global phenomenon. It’s the most controversial investment instrument, perhaps ever. But what a lot of people miss is that there’s more to come. Oh boy, there’s plenty more to come.',
	  		NewsDate:'23/11/2017'
	  	},
	  	{
	  		NewsName: 'An Investor’s Major Dilemma in Today’s Markets',
	  		NewsDesc:'You may have heard of the ‘prisoner’s dilemma’. It’s a standard example in a branch of economics called game theory. Well nowadays, the classical models of economics taught in universities have proven to be poor models of reality. Which brings us to the investor’s dilemma today.',
	  		NewsDate:'23/11/2017'
	  	},
	  	{
	  		NewsName: 'The End of Big Data',
	  		NewsDesc:'Large data theft is a huge threat to society, and alarmingly common place. Big companies such as Yahoo, MySpace, Target, Anthem and Equifax have all been hacked in recent months. So, what is the alternative?',
	  		NewsDate:'22/11/2017'
	  	},
	  	{
	  		NewsName: 'Has This Crypto Minnow Solved Cryptos Biggest Problem?',
	  		NewsDesc:'A crypto with a network value of only US$10 million may have solved the biggest problem right now in crypto development. It’s up 25.59% today and the increase in volume suggests people are starting to notice this crypto minnow.',
	  		NewsDate:'21/11/2017'
	  	}
  	];
  }

}
