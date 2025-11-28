document.querySelector('form >div>.genre').innerHTML = `
    <select id="Genre-complet"  name="genre" required>
        <option value="">-- Sélectionnez votre genre --</option>
        <option value="masculin">Masculin</option>
        <option value="feminin">Féminin</option>
    </select>
    <i id="gender" class="fa-solid fa-mars-and-venus" style="color: #ffffff;"></i>
`;
const SelectGenre = document.getElementById('Genre-complet');
SelectGenre.style.width = '80%';
SelectGenre.style.height = '40px';
SelectGenre.style.border =' 2px solid rgba(255, 255, 255, 0.2)';
SelectGenre.style.background = 'transparent';
SelectGenre.style.outline = 'none';
SelectGenre.style.backdropFilter = 'blur(20px)';
SelectGenre.style.borderRadius = '25px';
SelectGenre.style.marginTop = '5px';
SelectGenre.style.marginBottom = '15px';
SelectGenre.style.color = 'white';
SelectGenre.style.paddingLeft = '30px';

const genderIcon = document.getElementById('gender');
genderIcon.style.position = 'absolute';
genderIcon.style.right = '150px';
genderIcon.style.top = '20.7%';
genderIcon.style.transform = 'translateY(-50%)';



const FormData =  {
    Nom : "",
    Prenom : "",
    Genre : "",
    Date : "",
    Adress : "",
    Wilaya : "",
    Matricule : "",
    Niveau : "",
    Departement : "",
    Specialité : "",
    Email : "",
    ID : "",
    MDP : "" , 
    MDPcomfirm  : "",  
}; 

document.addEventListener('DOMContentLoaded', function() {

const inputNom = document.querySelector("#Nom-complet");
 let Nom = " "
 inputNom.addEventListener('input',(e)=>{
    FormData.Nom= (e.target.value);
})
  
const inputPrenom = document.querySelector("#Prenom-complet");
let Prenom = " "
inputPrenom.addEventListener('input',(e)=>{
    FormData.Prenom = (e.target.value);
})

const inputgenre = document.getElementById('Genre-complet');
let Genre = " ";
inputgenre.addEventListener('input',(e)=>{
    FormData.Genre = (e.target.value)
})

const inputDate = document.querySelector('input[type="date"]');
let Date = " "
inputDate.addEventListener('input',(e)=>{
    FormData.Date = (e.target.value);
})

const inputAdress = document.querySelector("#Adress-complet");
let Adress =" ";
inputAdress.addEventListener('input',(e)=>{
    FormData.Adress = (e.target.value);
})

const inputWilaya = document.querySelector("#Wilaya-dz");
let Wilaya = " ";
inputWilaya.addEventListener('input',(e) => {
   FormData.Wilaya = (e.target.value);
})

const inputMatricule = document.querySelector("#Matricule-complet");
let Matricule = " ";
inputMatricule.addEventListener('input',(e)=>{
    FormData.Matricule = (e.target.value);
})

const inputNiveau = document.querySelector('#Niveau-etude');
let Niveau = " ";
inputNiveau.addEventListener('input',(e)=>{
    FormData.Niveau = (e.target.value);
})

const inputDepartement = document.querySelector('#Departement-complet');
let Departement = " ";
inputDepartement.addEventListener('input',(e)=>{
    FormData.Departement = (e.target.value);
})

const inputSpecialité = document.querySelector('#Specialité-complet');
let Specialité = " ";
inputSpecialité.addEventListener('input',(e)=>{
    FormData.Specialité = (e.target.value);
})

const inputEmail = document.querySelector('input[type="email"]');
let Email = " ";
inputEmail.addEventListener('input',(e)=>{
    FormData.Email = (e.target.value);
})

const inputId = document.querySelector('#Id-complet');
let ID = " ";
inputId.addEventListener('input',(e)=>{
    FormData.ID = (e.target.value);
})

const inputMdp = document.querySelector('input[type=password]');
let MDP = " ";
inputMdp.addEventListener('input',(e)=>{
    FormData.MDP = (e.target.value);
})
const inputMdpcomfirm = document.querySelector('.input-mdp2 input[type=password]');
let MDPcomfirm = " ";
inputMdpcomfirm.addEventListener('input',(e)=>{
    FormData.MDPcomfirm = (e.target.value);
})

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
});
});



document.addEventListener('DOMContentLoaded', function() {
    const inputMDP1 = document.querySelector('.input-mdp input');
    const inputMDP2 = document.querySelector('.input-mdp2 input');
    const iconMDP1 = document.querySelector('.input-mdp .fa-lock');
    const iconMDP2 = document.querySelector('.input-mdp2 .fa-lock');
        
        iconMDP1.classList.remove('fa-lock');
        iconMDP1.classList.add('fa-lock','fa-beat-fade');
        iconMDP2.classList.remove('fa-lock');
        iconMDP2.classList.add('fa-lock','fa-beat-fade');

    // Ajouter l'événement click sur l'icône
   iconMDP1.addEventListener('click', function() {
        if (inputMDP1.type === "password"){
            inputMDP1.type = "text";
            iconMDP1.classList.remove('fa-lock','fa-beat-fade');
            iconMDP1.classList.add('fa-lock-open','fa-beat-fade');
        } else {
            inputMDP1.type = "password";
            iconMDP1.classList.remove('fa-lock-open','fa-lock-beat-fade');
            iconMDP1.classList.add('fa-lock','fa-beat-fade');
    }
    }); 

    iconMDP2.addEventListener('click', function() {
    if (inputMDP2.type === "password"){
        inputMDP2.type = "text";
        iconMDP2.classList.remove('fa-lock','fa-beat-fade');
        iconMDP2.classList.add('fa-lock-open','fa-beat-fade');
    }else{
        inputMDP2.type ="password";
        iconMDP2.classList.remove('fa-lock-open','fa-beat-fade');
        iconMDP2.classList.add('fa-lock','fa-beat-fade');
    }
});
});




