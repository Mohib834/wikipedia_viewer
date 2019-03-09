import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }
    async getData(){
        try{
            const d = await axios(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${this.query}`)
            this.result = d.data.query.search
            console.log(d);
        }
        catch(err){
            alert(err);
        }
    }  
}