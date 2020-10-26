class Grocery {
    constructor(public name: string, public quantity: string, public notes: string) {
    }

    grocery(){
        return this.name +": " + this.quantity + "_____" + "notes: " + this.notes + "<br>";  
    }

}

let milk = new Grocery ('milk' , '3' , '2% milk' ); 
let bread = new Grocery ('bread', '2', 'gluten free');
let bananas = new Grocery ('bananas', '1', 'greenish-yellow');
let apples = new Grocery ('apples', '5', 'applecrips');

let list = [milk, bread, bananas, apples];

function groceries (item){
    for(let item of list){
        document.write(item.grocery());
    }
}

groceries(list);