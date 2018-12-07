var positionsarray = [
    "201.07 808",
    "531.18 818",
    "716 818",
    "943 818",
    "1200.42 818",
    "1432 444",
    "1368.98 88",
    "942.33 0",
    "716 0",
    "531.18 0",
    "86.03 85",
    "0 441",
    "201.07 808"];
function breakPositions(position) {
    var on=position;
    position=positionsarray[position-1];
    var breakingindex=position.search(" ");
    var positionx=position.slice(0,breakingindex);
    var positiony=position.slice(breakingindex,position.length);
    var playerPosition=[(on),positionx,positiony];
    // alert(playerPosition);
    return playerPosition;
}
function arrangePlayers(numbersOfPlayers){
    var playerPosition=[0];
    if(numbersOfPlayers===2){
        playerPosition.push(breakPositions(3));
        console.log(playerPosition);
        playerPosition.push(breakPositions(9));
        console.log(playerPosition);
    }else if(numbersOfPlayers===3){
        playerPosition.push(breakPositions(3));
        console.log(playerPosition);
        playerPosition.push(breakPositions(8));
        console.log(playerPosition);
        playerPosition.push(breakPositions(10));
        console.log(playerPosition);
    }else if(numbersOfPlayers===4){
        playerPosition.push(breakPositions(2));
        console.log(playerPosition);
        playerPosition.push(breakPositions(4));
        console.log(playerPosition);
        playerPosition.push(breakPositions(10));
        console.log(playerPosition);
        playerPosition.push(breakPositions(8));
        console.log(playerPosition);
    }else if(numbersOfPlayers===5){
        playerPosition.push(breakPositions(3));
        console.log(playerPosition);
        playerPosition.push(breakPositions(6));
        console.log(playerPosition);
        playerPosition.push(breakPositions(8));
        console.log(playerPosition);
        playerPosition.push(breakPositions(10));
        console.log(playerPosition);
        playerPosition.push(breakPositions(12));
        console.log(playerPosition);
    }else if(numbersOfPlayers===6){
        playerPosition.push(breakPositions(1));
        console.log(playerPosition);
        playerPosition.push(breakPositions(3));
        console.log(playerPosition);
        playerPosition.push(breakPositions(5));
        console.log(playerPosition);
        playerPosition.push(breakPositions(7));
        console.log(playerPosition);
        playerPosition.push(breakPositions(9));
        console.log(playerPosition);
        playerPosition.push(breakPositions(11));
        console.log(playerPosition);
    }else if(numbersOfPlayers===7){
        playerPosition.push(breakPositions(3));
        console.log(playerPosition);
        playerPosition.push(breakPositions(6));
        console.log(playerPosition);
        playerPosition.push(breakPositions(7));
        console.log(playerPosition);
        playerPosition.push(breakPositions(8));
        console.log(playerPosition);
        playerPosition.push(breakPositions(10));
        console.log(playerPosition);
        playerPosition.push(breakPositions(11));
        console.log(playerPosition);
        playerPosition.push(breakPositions(12));
        console.log(playerPosition);
    }else if(numbersOfPlayers===8){
        playerPosition.push(breakPositions(2));
        console.log(playerPosition);
        playerPosition.push(breakPositions(4));
        console.log(playerPosition);
        playerPosition.push(breakPositions(6));
        console.log(playerPosition);
        playerPosition.push(breakPositions(7));
        console.log(playerPosition);
        playerPosition.push(breakPositions(8));
        console.log(playerPosition);
        playerPosition.push(breakPositions(10));
        console.log(playerPosition);
        playerPosition.push(breakPositions(11));
        console.log(playerPosition);
        playerPosition.push(breakPositions(12));
        console.log(playerPosition);
    }else if(numbersOfPlayers===9){
        playerPosition.push(breakPositions(1));
        console.log(playerPosition);
        playerPosition.push(breakPositions(3));
        console.log(playerPosition);
        playerPosition.push(breakPositions(5));
        console.log(playerPosition);
        playerPosition.push(breakPositions(6));
        console.log(playerPosition);
        playerPosition.push(breakPositions(7));
        console.log(playerPosition);
        playerPosition.push(breakPositions(8));
        console.log(playerPosition);
        playerPosition.push(breakPositions(10));
        console.log(playerPosition);
        playerPosition.push(breakPositions(11));
        console.log(playerPosition);
        playerPosition.push(breakPositions(12));
        console.log("qasim:",playerPosition[8][0]);
    }else{

    }
    return playerPosition;
}
function generatePlayers(answer) {
    var playerPosition=arrangePlayers(parseInt(answer));
    for(var i=1;i<playerPosition.length;i++){
        if(playerPosition[i][0]===3||playerPosition[i][0]===4||playerPosition[i][0]===5||playerPosition[i][0]===6||playerPosition[i][0]===7){
            console.log(i,":right");
        }else{
            console.log(i,":left");
        }
    }
}
function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
function distributeCards(){
    var x=document.getElementById("dealercard").style.transform="translate(1347.98px, -56.00px)";//+103,+10

    var y=document.getElementById("dealercard2").style.transform="translate(1403.98px, -66.00px) rotate(7.7deg)";//+103,+10
    console.log(x);

    // var answer = window.prompt("Number of players");
    // if(answer)
    // {
    //     console.log(answer);
    //     generatePlayers(parseInt(answer));
    // }
    // else
    // {
    //     alert("No");
    // }
}
