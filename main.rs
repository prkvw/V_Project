fn main () {
    println!("hooray, liftoff!");
//var init
// let q = -5;
// println!("The value of q is: {}", q);

//     let q_plus_two = add_two(q);
//     println!("The value of q_plus_two is: {}", q_plus_two);
countdown();
countdown_from(5);
    
let y = expression_example();
println!("The value of y is: {}", y);
//statement to expression using if
// let number =5;
//  let is_positive = if number >= 0 { true } else {false};
//  println!("The value of the number is: {}", is_positive);}

}

fn expression_example() -> u32 { 
    let x = 3;
    x + 1
 }

 //fn add_two (x:i32) -> i32 { x+2 }

 fn countdown() {
    let mut counter = 0;
    let result = loop {
        counter +=1;
    
    if counter ==10{
    break counter*2;
}
 };
 println!("The result is : {}", result) ;
}

 fn countdown_from(x:u32) {
    let mut number = x;
    while number != 0 {
        println!("{}", number) ;
        number -= 1;
 };
 println!("LIFTOFF!!");
}
 