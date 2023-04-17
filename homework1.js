// Homework
// Create a class that represents anything you like
// Make sure each class has at least one method and one piece of data unique to it
class Models {
    constructor({firstName, secondName, height = 175, agency = `a fashion agency`}) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.agency = agency;
        this.height = height;
      }
      modelDetails () {
        return this.firstName + ` ` + this.secondName + `, represented by ` +this.agency;
      }
}
  
const _model = new Models({firstName: "Kate", secondName: "Moss", agency: "KMA", height: 170});
console.log(_model.modelDetails());

// Create a class that extends the first class
class Angels extends Models {
    constructor(height) {
      super(height);
      this.agency = `Victoria's Secret`;
  }
  angelDetails () {
    return this.firstName + ` ` + this.secondName + `, measures ` +this.height + `cm and is represented by ` +this.agency;
  }
}

const _angel = new Angels({firstName: "Karolina", secondName: "Kurkova", height: 180});
console.log(_angel.angelDetails());

// // Create a class that extends the second class
// class Redheads extends Angels {
//     constructor (height, hairColour) {
//         super(height);
//         this.hairColour = "ginger";
//     }
//     gingerDetails () {
//         return this.firstName + ` ` +this.secondName + ` is a ginger Victoria's secret Angel and measures ` +this.height +`cm` 
//     }
// }
  
// const _redhead = new Redheads({firstName: "Alexina", secondName: "Graham", height: 180, hairColour: "ginger"});
// console.log(_redhead.gingerDetails());

// Create an instance of the final class
// As above

// Modify the classes above to use get/set

class Redheads extends Angels {
    constructor (height, hairColour) {
        super(height);
        this.hairColour = "ginger";
    }
    gingerDetails () {
        return this.firstName + ` ` +this.secondName + ` is a ginger Victoria's secret Angel and measures ` +this.height +`cm` 
    }
    get fullName () {
        return this.firstName + ` ` +this.secondName;
    }
    set fullName(fullName) {
      const parts = fullName.split(" ");
      this.firstName = parts[0];
      this.secondName = parts[1];
    }
}
const _redhead = new Redheads({firstName: "Alexina", secondName: "Graham", height: 180, hairColour: "ginger"});
console.log(_redhead.fullName);

// 1. Create a function in a second file, use export to export it
// See file homework2.js

// 2. In your main file import and execute the function
import {expo} from `./homework2.js`;

expo (3, 3);

// 3. Write out a fat arrow function using the same line to return (as in no return keyword)
// const developerSalaryCalculator = (x, y) => console.log(`£ ${Math.ceil(x ** y)} p.a.`);
// developerSalaryCalculator(1000,2);

// 4. Add default parameters to the above function
const developerSalaryCalculator = (x = 1000, y = 3) => console.log(`£ ${Math.ceil(x ** y)} p.a.`);
developerSalaryCalculator();

// 5. Create an object that has a child object, that itself has a child object (3 levels).
let family = {
    boss: {
        name: "Charlie",
        age: 75,
        wealth: {
            personal: 600 * 1000000,
            crownEstate: 15 * 1000000000,
        }
    },
    replacement: {
        name: "Camilla",
        age: 76,
    },
    hair: {
        name: "Wills",
        age: 41,
    },
    middleClass: {
        name: "Kate",
        age: 41,
    }
}

// 6. Use object destructuring to pull out the parts at level 3
// const {personal: pocketMoney} = family.boss.wealth;
// const {crownEstate: piggyBank} = family.boss.wealth;
// console.log(pocketMoney+piggyBank);

// 7. Add a default value to the above destructuring
const {personal: pocketMoney = 10000000} = family.boss.wealth;
const {crownEstate: piggyBank = 1 * 1000000000} = family.boss.wealth;
console.log(pocketMoney+piggyBank);

// 8. Destructure an array
const favGrandChildren = ["George", "Charlotte", "Louis"];
const [gc1, gc2, gc3] = favGrandChildren;
console.log(`Old good Charlie's favourite grandchildren are ${gc1}, ${gc2} and ${gc3}`);     

// 9. Create two objects. Add more than two keys/values to both objects. Copy all the items from the first object into the second object. Use the spread operator.
const bottles = {
    champaigne: "Cristal",
    wine: "Petrus",
    whisky: "Yamazaki",
}

let models = {
    blonde: "Karlie Kloss",
    brunette: "Alessandra Ambrosio",
    ginger: "Alexina Graham",
}

const party = {...models, ...bottles};
console.log(party);

// 10. Send 5 arguments to a function and use the rest operator to group them
function journoAI (a,b,c,d,e) {
    const personae = [a, b, c, d, e];
    const [diva, bombshell, ...rest] = personae; 
    return console.log(`The party was full of ${diva}, ${bombshell}, ${rest}... and ended in the wee hours with the arrival of riot police.`)
}

const [arg1,arg2,arg3,arg4,arg5] = Object.values(party);
journoAI(arg1,arg2,arg3,arg4,arg5);

// 11. Add a function to one of the objects, use the object method shorthand. 
models = {
    brainyQuote() {
        return console.log(`I still get butterflies when I'm doing a runway show. The music starts, you're wearing these gorgeous clothes and you're nervous about your high heels, if your shoes are going to break, if you're going to slip or do something wrong.`);
    }
}
models.brainyQuote();
