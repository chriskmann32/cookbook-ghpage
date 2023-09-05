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
    const [values, setValues] = React.useState<Values | undefined>()

    const getCSV = () => {
        Papa.parse('raw.githubusercontent.com/chriskmann32/cookbook-ghpage/main/recipes.csv', {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ',',
            complete: (results: ParseResult<Recipes>) => {
                // @ts-ignore
                setValues(results)
                console.log(results)
            },
        })
    }

    React.useEffect(() => {
        getCSV()
    }, [])

    console.log(values);
    return values
}

export default useReadCSV

