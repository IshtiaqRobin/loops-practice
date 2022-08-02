var numbers = [50, 60, 45, 88, 40, 30, 188, 55, 70, 88, 90];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 40){
        continue;
    }
    console.log(number);
}
