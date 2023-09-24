import Papa, { ParseResult } from 'papaparse'
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
*/

const useReadCSV = () => {
    fetch(process.env.PUBLIC_URL +  '/recipes.csv')
        .then(r => r.text())
        .then((text) => {
            return Papa.parse(text, {
                delimiter: "|",
                header: true
            })
        })
        .then((data) => {
            console.log(data);
        })
}

export default useReadCSV

