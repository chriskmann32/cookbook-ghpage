import * as path from 'path';
import * as fs from 'fs';
import {parse} from 'csv-parse'

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
    const csvFilePath = path.resolve(__dirname,'recipes.csv');
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
    const fileContent = fs.readFileSync(csvFilePath, {encoding: 'utf-8'});
    parse(fileContent, {
        delimiter: ',',
        columns: headers
    }, (error, result: Recipes[]) => {
        if (error) {
            console.log(error);
        }
        console.log("Result",result)
    })
}

export default useReadCSV

