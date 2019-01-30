class Github{
    constructor (){
         this.client_id = '530798aa0e493f4c0e64' ;
         this.client_secret = '5eaec67d36bf357310447ed6ee8b5bc526a00e0b';
         this.repos_count = 5;
         this.repos_sort = 'created:asc'
    }

    async get(user){
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
       
        const profile = await response.json();
       
        const repos = await repoResponse.json();
        
        return {
            profile:profile,
            repos:repos
        }
    }
}