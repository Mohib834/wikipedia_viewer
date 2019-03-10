export const elements = {
    searchBox:document.querySelector('.search-box'),
    search:document.querySelector('.search-box input'),
    result:document.querySelector('.result'),
    pagination:document.querySelector('.pagination'),
    pageContainer:document.querySelector('.container')
}

export const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}

export const renderLoader = () => {
    const loader = `
    <div class="lds-css ng-scope loader">
<div class="lds-blocks" style="width:100%;height:100%"><div style="left:38px;top:38px;animation-delay:0s"></div><div style="left:80px;top:38px;animation-delay:0.125s"></div><div style="left:122px;top:38px;animation-delay:0.25s"></div><div style="left:38px;top:80px;animation-delay:0.875s"></div><div style="left:122px;top:80px;animation-delay:0.375s"></div><div style="left:38px;top:122px;animation-delay:0.75s"></div><div style="left:80px;top:122px;animation-delay:0.625s"></div><div style="left:122px;top:122px;animation-delay:0.5s"></div></div>
    `;

    elements.pageContainer.insertAdjacentHTML('afterbegin',loader);
}