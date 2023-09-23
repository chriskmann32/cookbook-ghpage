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
import axios from 'axios'

const useReadCSV = () => {
    axios.get('https://api.github.com/repos/chriskmann32/cookbook-ghpage/actions/artifacts/942188276/zip')
        .then((response) => {
            console.log(response)
        })
}

export default useReadCSV

