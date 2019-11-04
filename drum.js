// Mon travail !! Pas fini !!

/*
document.addEventListener('keypress',touche);        


function touche(){
    if(keyCode == 113){
        var son1 = document.getElementById('monSon1');
        son1.play();
    }else if(keyCode == 115){
        var son2 = document.getElementById('monSon2');
        son2.play();
    }else if(keyCode == 100){
        var son3 = document.getElementById('monSon3');
        son3.play();
    }else if(keyCode == 102){
        var son4 = document.getElementById('monSon4');
        son4.play();
    }else if(keyCode == 103){
        var son5 = document.getElementById('monSon5');
        son5.play();
    }else if(keyCode == 104){
        var son6 = document.getElementById('monSon6');
        son6.play();
    }else if(keyCode == 106){
        var son7 = document.getElementById('monSon7');
        son7.play();
    }else if(keyCode == 107){
        var son8 = document.getElementById('monSon8');
        son8.play();
    }
}


var clik = document.getElementById('link1');
clik.addEventListener('click',clique);

function clique(){
    if(onclick('link1')){
        var son1 = document.getElementById('monSon1');
        son1.play();
    }else if(onclick('link2')){
        var son2 = document.getElementById('monSon2');
        son2.play();}
}


var q = document.getElementById('link1');
var s = document.getElementById('link2');
var d = document.getElementById('link3');
var f = document.getElementById('link4');
var g = document.getElementById('link5');
var h = document.getElementById('link6');
var j = document.getElementById('link7');
var k = document.getElementById('link8');
var link = [q,s,d,f,g,h,j,k];

document.addEventListener('keydown',enable);
function enable(){
   var i=0
        link[i].style.backgroundColor = 'black';
        link[i].style.color = 'white';
        console.log(link[i])
    }
    
document.addEventListener('keyup',disable);
function disable(){
    for(var i=0;i<link.length;i++){
        link[i].style.backgroundColor = 'transparent';
        link[i].style.color = 'black';
    }
}

*/

//Version donné par un pro

//création d'una variable tableau dans lequel on va lier les touches du clavier au code ASCII et au son
var keyboard = [
    { 'charCode':113, 'keyName':'Q', 'music':'Son/Clap.wav' },
    { 'charCode':115, 'keyName':'S', 'music':'Son/Cymbal.wav'},
    { 'charCode':100, 'keyName':'D', 'music':'Son/Hat.wav'},
    { 'charCode':102, 'keyName':'F', 'music':'Son/Hhat.wav'},
    { 'charCode':103, 'keyName':'G', 'music':'Son/Kick.wav'},
    { 'charCode':104, 'keyName':'H', 'music':'Son/Snare.wav'},
    { 'charCode':106, 'keyName':'J', 'music':'Son/Tom1.wav'},
    { 'charCode':107, 'keyName':'K', 'music':'Son/Tom2.wav'},
];



var audio = document.getElementById('keyboard_audio'); // création de la variable lié au div du html
keyboard.forEach(function(key){ //création de la fonction 'key' lié au tableau "keyboard"
    var div_touche = document.createElement('div'); // création d'une variable qui va creer un élément 'div'
    div_touche.className = 'touche'; // cet élément div aura la class 'touche'
    div_touche.setAttribute('id','touche-'+key.charCode); // il aura l'id 'touche-' suivi du 'key.charCode' c'est a dire du chiffre du charCode (ASCII)
    div_touche.setAttribute('data-key',key.charCode); // le div aura aussi un data-key qui sera le chiffre ASCII
    div_touche.setAttribute('data-music',key.music);// il aura enfin le lien avec le son du 'sample'
    div_touche.textContent = key.keyName;// on insert pour finir dans la div le texte qui deffini la touche via le 'keyName'
    audio.appendChild(div_touche); // on ajoute un noeud enfant à 'audio' qui sera donc la variable 'touche'
});

var clik = document.querySelectorAll('.touche'); // création de la variable clik qui va cibler tout les élément qui ont la class .touche (et donc tout les élément du tableau)
clik.forEach(function(clic){ // et donc pour chaque click et donc chaque element du tableau on lui greffe une fonction
    clic.addEventListener('click',function(){ // cette fonction va dire que a chaque clique il y a un evenement qui va lancer une autre fonction
        playSound(clic); // cette fonction consiste à lancer 'play' (qui est une autre fonction)
    });
});


document.addEventListener('keypress', function(event){ // création d'un evenemnt lié a la pression d'une touche a laquelle on ajoute une fonction
    console.log(event.key);
    console.log(event);
    var clic = document.getElementById('touche-'+event.charCode); // cette fonction a une variable qui va ciblé dans le DOM
    if (clic){
        playSound(clic);
    }
    
});

function playSound(clic){ // creation de la fonction de la lecture des sons et du changement css
    clic.style.backgroundColor = "grey";
    setTimeout(function(){
        clic.style.backgroundColor = ''; 
    }, 200);
    var son = new Audio(clic.dataset.music);
    son.play();
}
