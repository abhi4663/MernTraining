function is_prime(n){
    if (n <= 1)
        return false;
    if (n == 2)
        return true;
    if (n % 2 == 0)
        return false

   let i = 3
    while( i <=Math.sqrt(n)){
        if( n % i == 0)
            return false;
        i = i + 2
    }
    return true;
}

    function* prime_generator(){
    n = 1
    while (true){
        n += 1;
        if( is_prime(n)){
            yield n;
        }

    }
}


let generator = prime_generator();
let number=10;
for(let i=0;i<number;i++)
   console.log(generator.next().value);