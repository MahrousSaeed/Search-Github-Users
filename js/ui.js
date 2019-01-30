class UI{
  showProfile(data){
   
    const output = document.querySelector(".profile");
    output.innerHTML = `
        <div class="row output" ">
            <div class="col-md-3">
                <div class="pic">
                    <img src="${data.profile.avatar_url}" class="img-fluid" style="width:100%" alt="">
                    <a href="${data.profile.html_url}"  class="btn btn-primary btn-block mt-3 mb-2" target="_blank">View Profile </a>

                </div>
            </div>
            <div class="col-md-9">
                <div class="tag">
                    <span class="badge badge-primary">Public Repos: ${data.profile.public_repos}</span>
                    <span class="badge badge-secondary">Followers: ${data.profile.followers}</span>
                    <span class="badge badge-danger">Followeing: ${data.profile.following}</span>
                    <span class="badge badge-success">Public Gists: ${data.profile.public_gists}</span>
                </div>
                
        
                <ul class="list-group" style="list-style:none">
                    <li class="list-group-item"> <span>company : </span>  ${data.profile.company}<li>
                    <li class="list-group-item"> <span> Website/Blog : </span>${data.profile.blog}<li>
                    <li class="list-group-item"> <span> Location : </span>${data.profile.location}<li>
                    <li class="list-group-item"> <span> Member Since : </span> ${data.profile.created_at}<li>
                </ul>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    
    `
   }
   showRepos(data){
       console.log(data.repos)
       let output = '';
       data.repos.forEach(function(repo){
           output += `
           <div class="card card-body mb-2" style="padding:10px !important">
                <div class="row">
                    <div class="col-sm-5">
                        <a target="_blank" href="${repo.html_url}">${repo.name}</a>
                    </div>
                    <div class="col-sm-7 repo-item">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                        <span class="badge badge-danger">Fork: ${repo.forks_count}</span>
                    </div>
                </div>
       
            </div>
           
           `
       })
       document.getElementById("repos").innerHTML = output;

   }
   clearProfile(){
    const output = document.querySelector(".profile");
    output.innerHTML = ''
   }

   showAlert(){
      this.clearAlert();
       const div = document.createElement("div");
        div.className = "alert alert-danger mt-3";
        div.appendChild(document.createTextNode("user not found"));
        const search = document.querySelector(".search-container");
        const searchTopContainer = document.querySelector(".searchTopContainer");
        
        searchTopContainer.insertBefore(div,search)
        setTimeout(() => {
            this.clearAlert()
        },3000)
   }
   clearAlert(){
        const alert = document.querySelector(".alert");
        if(alert){
            alert.remove();
        }
       
   }
}