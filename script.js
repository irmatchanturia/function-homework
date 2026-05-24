// დავალება 1 — მისალმება
// დაწერე ფუნქცია, რომელიც პარამეტრად იღებს სახელს და აბრუნებს სტრიქონს ფორმატით: "გამარჯობა, [სახელი]!".
console.log("დავალება 1")
function sayHello(name){
    console.log("გამარჯობა, " + name + "!")
}
sayHello("ირმა")

// დავალება 2 — კალკულატორი
// დაწერე ოთხი ცალკე ფუნქცია: შეკრება, გამოკლება, გამრავლება და გაყოფა. თითოეული იღებს ორ რიცხვს 
// და აბრუნებს შედეგს. გაყოფის შემთხვევაში, თუ მეორე რიცხვი არის 0, ფუნქციამ უნდა დააბრუნოს null.
console.log("დავალება 2")

function addition(num1, num2){
    return num1 + num2
}
console.log(addition(2, 3));

function substract(num1, num2){
    return num1 - num2
}
console.log(substract(6, 3));

function multiply(num1, num2){
    return num1 * num2
}
console.log(multiply(2, 3));

function divide(num1, num2){
    if(num2 == 0){
        return null
    }
    return num1 + num2
}
console.log(divide(2, 0));


// დავალება 3 — კენტი და ლუწი
// დაწერე ფუნქცია, რომელიც იღებს მთელ რიცხვს და აბრუნებს true-ს თუ ის ლუწია, false-ს თუ კენტია.
console.log("დავალება 3")

function number(num){
    if(num%2==0){
        return true
    }else{
        return false
    }
}

console.log(number(5))
console.log(number(8))

// დავალება 4 — მასივის ჯამი
// დაწერე ფუნქცია, რომელიც იღებს რიცხვების მასივს და აბრუნებს ყველა ელემენტის ჯამს. 
// ამოცანა უნდა გადაიჭრას მხოლოდ ციკლის გამოყენებით.

console.log("დავალება 4")

function sumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum=sum+numbers[i]
    }
    return sum;
}
console.log(sumOfArray([2, 3, 4, 5]))

// დავალება 5 — პალინდრომი
// დაწერე ფუნქცია, რომელიც იღებს სტრიქონს და ამოწმებს არის თუ არა
//  ის პალინდრომი — ანუ ერთნაირად იკითხება წინიდანაც და უკნიდანაც. 
//  ფუნქციამ უნდა დააბრუნოს true ან false. დიდი და პატარა ასოები ერთმანეთის ტოლად ჩაითვალოს.
console.log("დავალება 5")

function isPalindrom(string){
    for(let i = 0; i < string.length; i++){
        let first = string [i];
        let last = string[string.length - i -1]
        if(first.toLowerCase() != last.toLowerCase()){
            return false;
        }
    }
    return true;
}
console.log(isPalindrom("Oto"))

// დავალება 6 — ფაქტორიალი
// დაწერე ფუნქცია, რომელიც იღებს დადებით მთელ რიცხვს და აბრუნებს მის ფაქტორიალს. 
// ფუნქცია უნდა იყოს რეკურსიული — ანუ საკუთარ თავს უნდა იძახებდეს. თუ გადაცემული რიცხვი 0-ია,
//  შედეგი უნდა იყოს 1.
console.log("დავალება 6")

function factorial(n){
    if(n === 0){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5));

// დავალება 7 — ტემპერატურის კონვერტაცია
// დაწერე ორი ფუნქცია: პირველი გადაიყვანს ცელსიუსს ფარენჰეიტში, მეორე — ფარენჰეიტს ცელსიუსში.
// მეორე ფუნქციაში ფორმულა ხელახლა არ უნდა დაიწეროს — გამოიყენე პირველი ფუნქცია.

console.log("დავალება 7")

let c = 10;

function celsius(c){
    return c * 9 / 5 + 32;
}

function fahrenheit(f){
    return (f - 32) * 5 / 9;
}

const degree = celsius(c);
console.log(degree); 

console.log(fahrenheit(50));

//პირველი ფუნქციის თავიდან გამოყენებით პასუხს ვერ ვიღებ. 



// დავალება 8 — Arrow Function
// ქვემოთ მოცემული სამი ფუნქცია გადაწერე arrow function-ის სინტაქსით. კოდს დაურთე კომენტარი,
//  სადაც ახსნი რა სინტაქსური განსხვავებაა ჩვეულებრივ და arrow ფუნქციას შორის.
console.log("დავალება 8")

function square(x) { return x * x; }
// let square = (x)=>{return x*x}

function isPositive(n) { return n > 0; }
// let isPositive = (n)=> { return n > 0; };

function combine(a, b) { return a + " " + b; }
// let combine = (a, b) => { return a + " " + b; };
console.log("არაფერია დასაკონსოლებელი")

//სხვაობა arrow function-სა და ჩვეულებრივ ფუნქციას შორის არის ის, რომ arrow function-ის დროს 
//ჩვენ არ ვიყენებთ არც ფუნქციის სახელს და არც სიტყვა function-ს. 
//ფუნქცია შენახულია ცვლადში და მასზე წვდომა გვაქვს სწორედ ცვლადის სახელის გამოძახებით. 


// დავალება 9 — ფუნქცია რომელიც ფუნქციას აბრუნებს
// დაწერე ფუნქცია, რომელიც პარამეტრად იღებს რიცხვს და აბრუნებს ახალ ფუნქციას. 
// დაბრუნებული ფუნქცია კი პარამეტრად იღებს სხვა რიცხვს და ამრავლებს მას პირველზე. 
// შედეგი უნდა მუშაობდეს ასე:
console.log("დავალება 9")

const triple = multiplier(3);
triple(4); // → 12
triple(7); // → 21

function multiplier(x){
    // return function(y){
    //     return x*y
    // }
    return (y) => x*y
}
const double = multiplier(2)
console.log(double(5))

// დავალება 10 — შედეგების დამახსოვრება
// დაწერე ფუნქცია memorize, რომელიც პარამეტრად იღებს სხვა ფუნქციას და აბრუნებს მის
// "გაუმჯობესებულ" ვერსიას. გაუმჯობესებული ვერსია პირველი გამოძახებისას ითვლის შედეგს
// ჩვეულებრივად, მაგრამ თუ იგივე არგუმენტით მეორედ გამოიძახეს — გამოთვლის გარეშე დაუყოვნებლივ
// აბრუნებს უკვე დათვლილ პასუხს.
console.log("დავალება 10")

function memorize(){

}





