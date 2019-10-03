import { AlphaVantageProvider } from "../providers/alpha-vantage/alpha-vantage";


export class Stock {
    name: string;
    symbol: string;
    data: object = { open: null, close: null };
    open: any;
    $loaded: boolean;
    stockProvider: AlphaVantageProvider;
    $$invalid: boolean = false;

    constructor(p: AlphaVantageProvider) {
        this.stockProvider = p;
        this.$loaded = false;
    }

    setName(name) {
        this.name = name;
    }

    setSymbol(symbol) {
        this.symbol = symbol;
    }

    fetch() {
        let stock = this;

        this.stockProvider.buildQuery({
            symbol: this.symbol
        }).fetch()
        .then(data => {
            console.log('ionViewDidLoad StocklistPage');
   
           // let time_series_data = data[Object.keys(data)[1]];
            //let latest_data = time_series_data[Object.keys(time_series_data)[Object.keys(time_series_data).length - 1]];
            stock.data = this.extractData(data);
        }, err => {
            stock.$$invalid = true;
        });
    }

    extractData(data) {
        return { open: data }   ;
    }
}