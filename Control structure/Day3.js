// Task 1
let number = 10;
let result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
//console.log("The number is:", result);

// Task 2
let age = 17;
let eligible = (age>=18)? "elgible":"not eligible"
//console.log(eligible);
//                           ACTIVITY ONE COMPLETED


// Task 3
function largest(a,b,c) {
    if(a>b){
        console.log(a,"a is greater");
    }else if (c>b) {
        console.log(c, "c is greater");
    } else {
        console.log(b, "b is greater");
    }
}

//largest(150,100,10)
//                            ACTIVITY TWO COMPLETED


// Task 4
function day(num) {
switch (num) {
    case 1:
        num = "Sunday"
        break;

    case 2:
        num = "Monday"
        break;

    case 3:
        num = "Tuesday"
        break;
    
    case 4:
        num = "Wednesday"
        break;
    
    case 5:
        num = "Thursday"
        break;
    
    case 6:
        num = "Friday"
        break;
    
    case 7:
        num ="Saturday"
        break;

    default:
        num = "Invalid Day Number"
        break;
}
       console.log(num);
}
//day(10)

// Task 5
function grade(number) {
    switch (true) {
        case (number<=100 && number>=80):
            number = "Grade A";
            break;
        
        case (number<=80 && number>=70):
            number = "Grade B";
            break;
    
        case (number<=70 && number>=60):
            number = "Grade C";
            break;
        
        case (number<=60 && number >= 40):
            number = "Grade D";
            break;
        
        case (number<=40):
              number= "Grade F";
              break;

        default:
            number = "marks is out of 100"
            break;
    }
    console.log(number);
}
//grade(50);
//                   ACTIVITY THREE COMPLETED

// Task 6
function oddeven(num2){
    let result = num2 % 2===0? "Even Number":"Odd Number"
    console.log(result);
}
//                     ACTIVITY FOUR COMPLETED 
//oddeven(3);

// Task 7
function leapyear(year){
    if((year%4===0 && year%100!==0) || (year%400===0)){
        console.log(year,"is a leap year");
    }else{
        console.log(year,"is not a leap year");
    }
} 

leapyear(2028)
//                       ACTIVITY FIVE COMPLETED