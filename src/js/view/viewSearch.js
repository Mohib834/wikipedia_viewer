import {elements} from './base';

export const getQuery = () => elements.search.value;
export const clearQuery = () => elements.search.value = '';
export const moveToTop = () => elements.searchBox.classList.add('moveUp');
export const clearResult = () => {
    elements.result.innerHTML = '';
    elements.pagination.innerHTML = '';
}

const renderResultUI = e => {
    const markup = `
        <li class="result-item">
            <a href="https://en.wikipedia.org/wiki/${e.title}" target="_blank">
                <h3>#${e.title}</h3>
                <p>${e.snippet}</p>
            </a>
        </li>
    `;
    elements.result.insertAdjacentHTML('beforeend',markup);
}

const createBtn = (type,page) => {
    return `
        <div class="btn btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
               ${type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
    `;

}

const renderPaginationBtn = (page, numResult, resPerPage) => {
    const pages = Math.ceil(numResult / resPerPage);

    let btn;
    if(page === 1 && pages > 1){
        //Create Next Btn on UI
        btn = createBtn('next',page);
    }else if(page < pages){
        //Create Both Next and Prev Btn on UI
        btn = `
            ${createBtn('prev',page)}
            ${createBtn('next',page)}
        `;
    }else if(page === pages && pages > 1){
        //Create Prev Btn on UI
        btn = createBtn('prev',page);
    }

    elements.pagination.insertAdjacentHTML('afterbegin',btn);


}

export const renderResult = (resultArr, page = 1, resPerPage = 10) => {
    //pagination
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    //slicing result and then rendering it on ui
    resultArr.slice(start,end).forEach(el => renderResultUI(el));
    renderPaginationBtn(page, resultArr.length, resPerPage);
}