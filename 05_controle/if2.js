function test1(num) {
    if (num > 7)
        console.log(num);
    
    console.log('Final');
}

// test1(6); 
// test1(8);

function test2(num){
    if(num>7); // cuidado com o ";" ele não deve ser utilizado em estruturas de cntrole
    {    
    console.log(num)
    }
}

test2(6);
test2(8);