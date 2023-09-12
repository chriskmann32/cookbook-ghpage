import * as React from 'react'
import Papa, { ParseResult } from 'papaparse'

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

type Ingredients = {

}

type Instructions = {

}

type Values = {
    recipes: Recipes[]
}

const useReadCSV = () => {
    fetch('https://drive.google.com/file/d/1jARClhNNlATxcg5VK8Wqa8zTAZsl0Yv3/view?usp=drive_link')
        .then(res => console.log(res))
}

export default useReadCSV

