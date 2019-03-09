const scss = require('../styles/style.scss');

import Search from './model/Search';
import {elements} from './view/base';
import * as viewSearch from './view/viewSearch';

const controllerSearch = async () => {
    //1) Get the value from input
    const query = viewSearch.getQuery();
    if(query){

        //2) Make a new Search Obj with query and fetch Data
        const search = new Search(query);
        
        //3) Prepare Ui for Result
        //clear input value
        viewSearch.clearQuery();
        //Shift Search bar up top
        viewSearch.moveToTop();
        //Clear Existing results
        viewSearch.clearResult();
        
        //4) Search the Query
        await search.getData();

        //5) Render Result on UI
        viewSearch.renderResult(search.result);

    }
}

elements.search.addEventListener('keypress', e => {
    if(e.which === 13){
        controllerSearch();
    }
})