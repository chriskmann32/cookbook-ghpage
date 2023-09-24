/*
type Recipes = {
    recipe_id: string,
    recipe_name: string,
    category: string,
    rating: string,
    cook_time: string,
    servings: string,
    category_sub: string,
    tod: string
}

const useReadCSV = () => {
    const csvFilePath = "";
    const headers = [
        'recipe_id',
        'recipe_name',
        'category',
        'rating',
        'cook_time',
        'servings',
        'category_sub',
        'tod'
    ];
}
*/

const useReadCSV = () => {
    fetch(process.env.PUBLIC_URL +  '/recipes.csv')
        .then(r => r.text())
        .then(text => {
            console.log(`text ${text}`)
        })
}

export default useReadCSV

