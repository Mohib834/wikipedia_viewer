import {elements} from './base';

export const getQuery = () => elements.search.value;
export const clearQuery = () => elements.search.value = '';
export const moveToTop = () => elements.searchBox.classList.add('moveUp');
export const clearResult = () => elements.result.innerHTML = '';

export const renderResult = result => {
    result.forEach(el => {
        const markup = `
            <li class="result-item">
                <a href="https://en.wikipedia.org/wiki/${el.title}" target="_blank">
                    <h3>#${el.title}</h3>
                    <p>${el.snippet}</p>
                </a>
            </li>
        `;
        elements.result.insertAdjacentHTML('beforeend',markup);
    })
}