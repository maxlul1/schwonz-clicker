let Schwonz = 0
let text ="Click Click Click";
let i = 5;
let b = 2
let tor = 1000000
let cost = 30 
let result = cost
let clearthis = 0
let howmuchpassiv = 0
let efcost = 75
let efresult = efcost
let one = 1
let efone = one
let ins = 0


function effizienz (params){
    if(Schwonz >= efcost ) {
        Schwonz -= efcost 
        efresult = efcost += 75
        one += 1
        document.getElementById("efprice").innerHTML = efcost ;
        document.getElementById("efprice").innerHTML = efcost + "mm";
        document.getElementById("points").innerHTML = Schwonz + "mm";
        
        
    }  else{
        alert("Du hast einen zu kleinen Schwonz!")
    }
}

function get(params){
    Schwonz += one;
    ins += one;
    document.getElementById("points").innerHTML = Schwonz + " Milimeter";
    document.getElementById("insgesamt").innerHTML = ins + " Milimeter insgesamt";
}

function upgrade(params){

    if(Schwonz >= cost ) {
    Schwonz -= cost 
    result = cost += 15
    document.getElementById("lang").innerHTML = cost + "mm" ;
    document.getElementById("points").innerHTML = Schwonz + " Milimeter";
    cutHandle = setInterval(get, 2000)
    cutHandle = setInterval(ins, 2000)
    howmuchpassiv + 1
    document.getElementById()
    
}  else{
    alert("Du hast einen zu kleinen Schwonz!")
}
}

function reset(params){
    Schwonz -= Schwonz
    document.getElementById("points").innerHTML = Schwonz + " Milimeter";
    clearInterval(cutHandle);
    document.getElementById("lang").innerHTML = cost = 30;
    document.getElementById("lang").innerHTML = 30 + "mm";
}

function weiter (){
    location.replace('https://www.instagram.com/maxfi.e')
}

function goal(){
if(tor<=Schwonz){
    alert("GG du hast das Spiel durchgespielt!")
}else{
    alert("Du brauchst einen längeren Schwonz!")
}
}








