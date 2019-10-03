import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import * as HighCharts from 'highcharts'; 
import { CommentSection } from '../../../models/comment-section';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@Component ({
	selector:'stock_info',
	templateUrl: 'stock-info.html'
})

export class StocksInfoPage{ 		

	commentSections = {} as CommentSection;

	commentsRef$: FirebaseListObservable<CommentSection[]>


	stock: any;
	chartOptions:any;
	NewsEntry:any;
	constructor(public navCtrl: NavController, public NavParams: NavParams, private db : AngularFireDatabase ){
		this.commentsRef$ = this.db.list('comment-list');
		this.stock = this.NavParams.get('stock');
	console.log(this.stock);

	}

	ionViewDidLoad(){
		var myChart = HighCharts.chart('container', {
			chart: {
			type: 'spline'
			},
			title: {
			text: 'Stock'
			},
			xAxis: {
			categories: ['2016', '2017', '2018']
			},
			yAxis: {
			title: {
			text: 'Fruit eaten'
			}
			},
			series: [{
			name: 'Jane',
			data: [1, 0, 4,3,2]
			}, {
			name: 'John',
			data: [5, 7, 3,8,5]
			}]
			});
	}

	insertComment(commentSections: CommentSection){

		this.commentsRef$.push({
			commentContent:this.commentSections
		});
		

			this.commentSections = {} as CommentSection;

			console.log(this.commentSections);
	}

	
}