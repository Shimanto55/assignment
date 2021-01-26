//Assignment problem 1//
function kilometerToMeter(num){
    meter= num*1000;
    return meter;
}

//Assignment problem 2//
function budgetCalculator(watch,phone,laptop){
    if(watch<=0 || phone<=0 || laptop<=0){
        console.log("invalid quantity");
    }
    else{
    watchBudget = watch*50;
    phoneBudget = phone*100;
    laptopBudget= laptop*500;
    totalBudget= watchBudget+phoneBudget+laptopBudget;
    return totalBudget;
    }
}


//Assignment problem 3//
function hotelCost(day){
    if(day<=10){
        cost= day*100;
        return cost;
    }
    else if(day<=20){
        first10= 10*100;
        n=day-10;
        costafter10= n*80;
        tCost= first10+ costafter10;
        return tCost; 
    }
    else{
        first=10*100;
        second=10*80;
        afterThat= (day-20)*50;
        totalCost= first+ second+ afterThat;
        return totalCost;
    }
}


//Assignment problem 4//
/function megaFriend(friends[""]){
    var nme= friends[0];
    for(var i=0, i=friends.length, i++ ){
        if(nme<friends[i]){
            nme = friends[i];  
        }
        else{
            return nme;
        }
    }
}
var a = megaFriend['ab', 'bcd', 'abcd'];
console.log(a);


/*function megaFriend(array){
    var bigName= array[0];
    for(var i = 0; i = array.length; i++ )
    {
       var x=0;
        if(x<array[i].length){
            x=array[i].length;
            return array[i];
        }
        else{
            y=0;
        }
    }
    return bigName;
}
var max= megaFriend(['a','bc','abc']);
console.log (max);

