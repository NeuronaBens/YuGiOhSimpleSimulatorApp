var currentId = 0;

function closeDiv(id){
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).remove();
}

function fAddMagicCard(){
  let aux = `<td id='${currentId}'><button class='closeButton' onclick='closeDiv(${currentId})'>x</button><p>Magic card</p></td>`;
  document.getElementById("back-row").innerHTML += aux;
  currentId += 1;
}

function addMonsterCard(level){
  let x = Math.random();
  let y = Math.random();
  if(level == 1){
    x = x*20; y = y*20;
    x = Math.round(x)*100; y = Math.round(y)*100;
  }
  else if(level == 2){
    x = x*(26-19) + 19; y = y*(26-19) + 19;
    x = Math.round(x)*100; y = Math.round(y)*100;
  }
  else if(level == 3){
    x = x*(40-25) + 25; y = y*(40-25) + 25;
    x = Math.round(x)*100; y = Math.round(y)*100;
  }

  let aux = `<td id="${currentId}"><button class="closeButton"onclick="closeDiv(${currentId})">x</button><p>Relative Level: ${level}</p><p>ATK: ${x}</p><p>DEF: ${y}</p></td>`;
  document.getElementById("front-row").innerHTML += aux;
  currentId += 1;
}

let LEVEL = 1;
let TURN = 0;
function alertInfo(){
  TURN += 1;
  let level = Math.pow(LEVEL, 0.3) + 1.8;

  let probOfMagicCards = LEVEL*0.13;
  let probLevel1Summon = LEVEL*0.15;
  let probOfSecondSummon = LEVEL*0.07
  let probOfEvolution = LEVEL*0.07;
  let probOfSuddenLevel2Summon = LEVEL*0.04;
  let probOfSuddenLevel3Summon = LEVEL*0.02;
  let probOfDestroy1 = LEVEL*0.04;
  let probOfNegateAttack = LEVEL*0.05;

  let addMagicCard = 0;
  let addLevel1Summon = 0;
  let addSecondSummon = 0;
  let addEvolution = 0;
  let addSuddenLevel2Summon = 0;
  let addSuddenLevel3Summon = 0;
  let addOfDestroy1 = 0;
  let addOfNegateAttack = 0;

  while(true){
    let probOfMagicCards = LEVEL*0.13;
    let probLevel1Summon = LEVEL*0.15;
    let probOfSecondSummon = LEVEL*0.07
    let probOfEvolution = LEVEL*0.07;
    let probOfSuddenLevel2Summon = LEVEL*0.04;
    let probOfSuddenLevel3Summon = LEVEL*0.02;
    let probOfDestroy1 = LEVEL*0.04;
    let probOfNegateAttack = LEVEL*0.05;

    let addMagicCard = 0;
    let addLevel1Summon = 0;
    let addSecondSummon = 0;
    let addEvolution = 0;
    let addSuddenLevel2Summon = 0;
    let addSuddenLevel3Summon = 0;
    let addOfDestroy1 = 0;
    let addOfNegateAttack = 0;

    x = Math.random();
    if(x < probOfMagicCards){ addMagicCard = 1;}
    x = Math.random();
    if(x < probLevel1Summon){ addLevel1Summon = 1;}
    x = Math.random();
    if(x < probOfSecondSummon){ addSecondSummon = 1;}
    x = Math.random();
    if(x < probOfEvolution){ addEvolution = 1;}
    x = Math.random();
    if(x < probOfSuddenLevel2Summon){ addSuddenLevel2Summon = 1;}
    x = Math.random();
    if(x < probOfSuddenLevel3Summon){ addSuddenLevel3Summon = 1;}
    x = Math.random();
    if(x < probOfDestroy1){ addOfDestroy1 = 1;}
    x = Math.random();
    if(x < probOfNegateAttack){ addOfNegateAttack = 1;}

    validation = addMagicCard + addLevel1Summon + addSecondSummon + addEvolution + addSuddenLevel2Summon + addSuddenLevel3Summon + addOfDestroy1 + addOfNegateAttack;
    if(validation >= 1 && validation <= level) break;
  }

  let stringy = "";

  stringy += String(TURN) + "<br>";

  if(addMagicCard){
    stringy += "Add a Magic card to the Field \n"+ "<br>";
    fAddMagicCard();
  }
  if(addLevel1Summon){
    stringy+="Summon a Strength 1 monster \n"+ "<br>";
    addMonsterCard(1);
  }
  if(addSecondSummon){
    stringy+="Summon another Strength 1 monster \n"+ "<br>";
    addMonsterCard(1);
  }
  if(addEvolution){
    stringy+="evolve the weakest monster to +1 strength \n"+ "<br>";
  }
  if(addSuddenLevel2Summon){
    stringy+="Summon a strength 2 monster \n"+ "<br>";
    addMonsterCard(2);
  }
  if(addSuddenLevel3Summon){
    stringy+="Summon a strength 3 monster \n"+ "<br>";
    addMonsterCard(3);
  }
  if(addOfDestroy1){
    stringy+="destroy a card on the field \n"+ "<br>";
  }
  if(addOfNegateAttack){
    stringy+="the Battle-Phase cannot proceed in the next turn \n"+ "<br>";
  }

  document.getElementById("directives").innerHTML = stringy;
}

function showValue(){
  document.getElementById("pForLevelValue").innerHTML = document.getElementById("inputLevel").value;
  LEVEL = document.getElementById("inputLevel").value;
}
