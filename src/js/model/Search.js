import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }
    async getData(){
        try{
            const d = await axios(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=${this.query}`)
            this.result = d.data.query.search
        }
        catch(err){
            alert(err);
        }
    }  
}