const github = new Github;
const ui = new UI;

const input = document.querySelector("input");

input.addEventListener('keyup',getUser);
function getUser(){
    const userText = input.value;
    if(userText !== ''){
        github.get(userText).then(data => 
        {
            if(data.profile.message === 'Not Found'){
                ui.showAlert();
            }else{
                // console.log(data.profile)
                ui.showProfile(data);
                ui.showRepos(data);
            }
        });
    } else {
       ui.clearProfile();
    }
}