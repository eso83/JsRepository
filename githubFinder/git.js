class GitHub{
    constructor(){
        this.client_id="d04a3c77ca325e9bad73";
        this.client_secret="f13c148a8adfc75728f7a984801e1bb95c0054f5"
    }
    async getUser(user){
        const profileResponse=  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile =await profileResponse.json();
        return{
            profile
        }
    }
}