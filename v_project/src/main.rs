use std{::io, cmp::Ordering};
 use rand::Rng;
fn main() {
    println!(" Guess the number");
    let secret_number = rand::thread_rng().gen_range(1, 101);

    loop {
        println!("Please input your guess. ");
 
     let mut guess = String::new();
 
     io::stdin().read_line(&mut guess)
     .expect("Error reading line");
    
     let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_err) => {println! ("Please input a number. ");
        continue;
    }
};
    println!("you guessed : {}", guess);

     match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {println!("You win!");
        break;
    }
}
}
}