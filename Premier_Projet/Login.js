
document.addEventListener('DOMContentLoaded', function() {
        let input = document.querySelector('.input-mdp input');
       let icon = document.querySelector('.input-mdp .fa-lock');
        
       
        
        icon.classList.add('fa-lock');
        
        // Ajouter l'événement click sur l'icône
       icon.addEventListener('click', function() {
           if (input.type === "password") {
                input.type = "text";
                icon.classList.remove('fa-lock');
                icon.classList.add('fa-lock-open');
            } else {
                input.type = "password";
                icon.classList.remove('fa-lock-open');
                icon.classList.add('fa-lock');
            }
        });
    });


    const inputid = document.querySelector('input[type ="text"]');
   const inputMdp = document.querySelector('input[type ="password"]');

    const form = document.querySelector('Form');
    console.log(form);

    let ID_Utilisateur = " ";
    let MDP_Utilisateur = " ";

    inputid.addEventListener('input',(e)=> {
           ID_Utilisateur = e.target.value;
    })
    inputMdp.addEventListener('input',(e)=>{
         MDP_Utilisateur = e.target.value;
    });

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        if (SSDM.checked){
           
        }else {
           alert (" Caucher Se Souvenir de MOi Avant !!")
        }

        console.log(SSDM.checked)
    
    
    })

