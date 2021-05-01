let btn = document.querySelector('.btn').addEventListener('click', hit);
let hpl = document.querySelector('.hpl');
let hpr = document.querySelector('.hpr');
let timer;

function Robot(hp, power, critical, evasion){
    this.hp = hp;
    this.power = power;
    this.critical = critical;
    this.evasion = evasion;
    this.attack = function(){
        return Math.floor(Math.random() * this.power + 1);
    }
    this.damage = function(x){
        return this.hp -= x;
    }
    this.criticalAttack = function(){
        return this.power + Math.floor(Math.random() * this.power + 1);
    }
}

let robot = new Robot(50, 10);
let robot2 = new Robot(50, 10);

function hit(){
    timer = setTimeout(hit2, 1000);
    hpr.innerHTML = robot2.hp;
    if(robot.hp == 50){
        this.style.display = 'none'
    }
    else if(robot2.hp < 1){
        hpr.innerHTML = 'YOU DIED'
        clearTimeout(timer);
    }
    else if(Math.floor(Math.random() * 100 + 1) < 20){
        robot2.damage(robot.criticalAttack());
        console.log('Критическая Атака');
        console.log(robot.criticalAttack());
    } else{
        robot2.damage(robot.attack());
    }
}

function hit2(){
    timer = setTimeout(hit, 1000);
    hpl.innerHTML = robot.hp;
    if(robot.hp < 1){
        hpl.innerHTML = 'YOU DIED'
        clearTimeout(timer);
    }
    else if(Math.floor(Math.random() * 100 + 1) < 20){
        robot.damage(robot2.criticalAttack());
        console.log('Критическая Атака');
        console.log(robot2.criticalAttack());
    } else{
        robot.damage(robot2.attack());
    }
}