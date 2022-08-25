class Icecream{
    count:number;
    flavour:string[];

    set_data(count:number,flavour:string[]):void{
       this.count=count;
        this.flavour=flavour;
    }

    display():void{
        console.log("flavour : "+ this.flavour);
    }

    defect(name1:string | object):void{
        console.log("This icecream is "+name1);
    }
}

let i1=new Icecream();
let i2=new Icecream();

i1.set_data(35,['chocolate','raspberry','butterscoth']);
i2.set_data(45,['Strawberry','apple','Almond']);
console.log("---------------");
console.log("Existing Data");
console.log("---------------");
i1.display();
i2.display();


i1.flavour.push("Fig");
i2.flavour.push("blackcurrent");
console.log("---------------");
console.log("Inserted data");
console.log("---------------");
i1.display();
i2.display();

console.log("-------------------");
console.log("Defected Icecream");
console.log("-------------------");
let remove_name:string="raspberry";
for(let rem_name in i1.flavour){
    if(i1.flavour[rem_name] === remove_name){
        console.log("The Iteam is "+rem_name+"  "+i1.flavour[rem_name] )
    }
}

console.log("----------");
console.log("Upadation");
console.log("----------");
for(let rem_name in i1.flavour){
    if(i1.flavour[rem_name] === remove_name){
        i1.flavour[rem_name]="Toffee";
        i1.display();
    }
}

console.log("---------");
console.log("Deletion");
console.log("---------");
for(let delete_fav in i1.flavour)
{
    if(i1.flavour[delete_fav]==="Toffee"){
        delete i1.flavour[delete_fav];
        i1.display();
    }
}


console.log("----------");
console.log("Threshold");
console.log("----------");
if(i2.count<100){
    console.log(i2.count);
    i2.defect(i2.flavour);
}
