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
    inputNom.addEventListener('input',(e)=>{
        FormData.Nom= (e.target.value);
    });
      
    const inputPrenom = document.querySelector("#Prenom-complet");
    inputPrenom.addEventListener('input',(e)=>{
        FormData.Prenom = (e.target.value);
    });

    const inputgenre = document.getElementById('Genre-complet');
    inputgenre.addEventListener('input',(e)=>{
        FormData.Genre = (e.target.value);
    });

    const inputDate = document.querySelector('input[type="date"]');
    inputDate.addEventListener('input',(e)=>{
        FormData.Date = (e.target.value);
    });

    const inputAdress = document.querySelector("#Adress-complet");
    inputAdress.addEventListener('input',(e)=>{
        FormData.Adress = (e.target.value);
    });

    const inputWilaya = document.querySelector("#Wilaya-dz");
    inputWilaya.addEventListener('input',(e) => {
        FormData.Wilaya = (e.target.value);
    });

    const inputMatricule = document.querySelector("#Matricule-complet");
    inputMatricule.addEventListener('input',(e)=>{
        FormData.Matricule = (e.target.value);
    });

    const inputNiveau = document.querySelector('#Niveau-etude');
    inputNiveau.addEventListener('input',(e)=>{
        FormData.Niveau = (e.target.value);
    });

    const inputDepartement = document.querySelector('#Departement-complet');
    inputDepartement.addEventListener('input',(e)=>{
        FormData.Departement = (e.target.value);
    });

    const inputSpecialité = document.querySelector('#Specialité-complet');
    inputSpecialité.addEventListener('input',(e)=>{
        FormData.Specialité = (e.target.value);
    });

    const inputEmail = document.querySelector('input[type="email"]');
    inputEmail.addEventListener('input',(e)=>{
        FormData.Email = (e.target.value);
    });

    const inputId = document.querySelector('#Id-complet');
    inputId.addEventListener('input',(e)=>{
        FormData.ID = (e.target.value);
    });

    const inputMdp = document.querySelector('.input-mdp input[type=password]');
    inputMdp.addEventListener('input',(e)=>{
        FormData.MDP = (e.target.value);
    });

    const inputMdpcomfirm = document.querySelector('.input-mdp2 input[type=password]');
    inputMdpcomfirm.addEventListener('input',(e)=>{
        FormData.MDPcomfirm = (e.target.value);
    });

});  // ✅ FIN DU PREMIER BLOC, CORRECT


// -----------------------------------------------------------------------
// ⚡ BLOC 2 : visible / invisible des mots de passe
// -----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {

    const inputMDP1 = document.querySelector('.input-mdp input');
    const inputMDP2 = document.querySelector('.input-mdp2 input');
    const iconMDP1 = document.querySelector('.input-mdp .fa-lock');
    const iconMDP2 = document.querySelector('.input-mdp2 .fa-lock');
            
    iconMDP1.classList.add('fa-beat-fade');
    iconMDP2.classList.add('fa-beat-fade');

    // Ajouter l'événement click sur l'icône
    iconMDP1.addEventListener('click', function() {
        if (inputMDP1.type === "password"){
            inputMDP1.type = "text";
            iconMDP1.classList.replace('fa-lock','fa-lock-open');
        } else {
            inputMDP1.type = "password";
            iconMDP1.classList.replace('fa-lock-open','fa-lock');
        }
    }); 

    iconMDP2.addEventListener('click', function() {
        if (inputMDP2.type === "password"){
            inputMDP2.type = "text";
            iconMDP2.classList.replace('fa-lock','fa-lock-open');
        }else{
            inputMDP2.type ="password";
            iconMDP2.classList.replace('fa-lock-open','fa-lock');
        }
    });
});
