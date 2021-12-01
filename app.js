const form = document.querySelector('form');
let reponses_checked = [];
const reponses_true = ["b","b","a","b","a"];
 let verifTab = [];
 const titreResultat = document.querySelector('.titre');
 const aideResultat = document.querySelector('.aide');
 const bloc = document.querySelectorAll('.blocs')
//  console.log(bloc)
 
// console.log(form)
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // var salah = document.querySelector('input[name="q1"]:checked').value;
    // console.log(salah)
    for (i=1 ; i<6 ; i++)  {
        var salah = document.querySelector(`input[name="q${i}"]:checked`).value;
        // console.log(salah)
        reponses_checked.push(salah)
    }    
    // console.log(reponses_checked)
    verif(reponses_checked, reponses_true);
    reponses_checked = [];
})
function verif(a,b){
    for (var i = 0 ; i < 5 ; i++) {
        if (a[i] === b[i]) {
            verifTab.push(true);
            bloc[i].style.background='lightgreen';
        }else{
            verifTab.push(false);
            bloc[i].style.background='#ffb8b8';

            bloc[i].classList.add("echec");
            setTimeout(() => {
                bloc[i].classList.remove('echec');
            }, 500)
        }   
    }
    // console.log(verifTab)
    nbrFautes(verifTab)
    verifTab = [];    
    bloc.forEach(item => {
        item.addEventListener('click', () => {
            item.style.background = "black";
        })
    })
}
// ******************************************************************
var conteur = 0;
function nbrFautes (para){
    for (i=0; i< para.length ; i++){
        if (para[i] == true){
            conteur++;
        }else{
            null
        }
        switch(conteur){
            case 0:
                document.querySelector('.toto').innerText=" 0/5";
                titreResultat.innerText = `👎 pas de chance  ! 👎`;
                aideResultat.innerText = `👎 tentez les reponses rouges  ! 👎`;
                break;
            case 1:
                document.querySelector('.toto').innerText=" 1/5";
                titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
                aideResultat.innerText = `👎 tentez les reponses rouges  ! 👎`;
                break;
            case 2:
                document.querySelector('.toto').innerText=" 2/5";
                titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
                aideResultat.innerText = `👎 tentez les reponses rouges  ! 👎`
                break;
            case 3:
                document.querySelector('.toto').innerText=" 3/5";
                titreResultat.innerText = `✨ Encore un effort ... 👀`;
                aideResultat.innerText = `👎 tentez les reponses rouges  ! 👎`;
                break;
            case 4:
                document.querySelector('.toto').innerText=" 4/5";
                titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
                aideResultat.innerText = `👎 tentez les reponses rouges  ! 👎`;
                break;
            case 5:
                document.querySelector('.toto').innerText=" 5/5";
                titreResultat.innerText = `✔️ Bravo, c'est etait sans faute ! ✔️`;
                aideResultat.innerText ='';
                break;
                default:
                    'Wops, cas innatendu.'; 
        }
    }
   conteur=0; 
}
 

