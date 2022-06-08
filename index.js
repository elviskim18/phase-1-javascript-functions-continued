// code your solution here
function saturdayFun(string){
    if(string == null){
        return `This Saturday, I want to roller-skate!`
    }
    else{
        return `This Saturday, I want to ${string}!`
    }
}

function mondayWork(string){
    if(string == null){
        return `This Monday, I will go to the office.`
    }
    else{
        return `This Monday, I will ${string}.`
    }
}
function wrapAdjective(string = "*"){
   return function(adj = "special"){
       return `You are ${string}${adj}${string}!`
   }
     
}
