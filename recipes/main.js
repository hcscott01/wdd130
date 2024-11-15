import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
    return `<div class="template">
            <img class="template-img" src="${recipe.image}" alt="image of ${recipe.name}">
            <div class="template-text">
                <h3>${tagsTemplate(recipe.tags)}</h3>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
                </span>
                <p>${recipe.description}</p>
            </div>
        </div>`;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<span>${tag}</span>`).join(', ');
}


function ratingTemplate(rating) {
    let html = ``; 
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    const outputElement = document.querySelector('.template');
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipesHTML;
}

function init() {
    const recipeRandom = getRandomListEntry(recipes);
    renderRecipes([recipeRandom]);
}
init();