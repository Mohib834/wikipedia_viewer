const main = require('../styles/style.scss');
const loader = require('../styles/loading.scss');
// const bannerImg = require('../img/banner.jpeg');

import Search from './model/Search';
import {elements,renderLoader,clearLoader} from './view/base';
import * as viewSearch from './view/viewSearch';

const state = {};

const controllerSearch = async () => {
    //1) Get the value from input
    const query = viewSearch.getQuery();
    if(query){

        //2) Make a new Search Obj with query and fetch Data
        state.search = new Search(query);
        
        //3) Prepare Ui for Result
        //clear input value
        viewSearch.clearQuery();
        //Shift Search bar up top
        viewSearch.moveToTop();
        //Clear Existing results
        viewSearch.clearResult();
        //Render Loader
        renderLoader();
        
        //4) Search the Query
        await state.search.getData();

        //5) Render Result on UI
        clearLoader();
        viewSearch.renderResult(state.search.result);

    }
}

elements.search.addEventListener('keypress', e => {
    if(e.which === 13){
        controllerSearch();
    }
})

window.addEventListener('click', e => {
    const btn = e.target.closest('.btn');

    if(btn){
        const gotoPage = parseInt(btn.dataset.goto,10);
        viewSearch.clearResult();
        window.scrollTo(0,0);
        viewSearch.renderResult(state.search.result,gotoPage);
    }
})
