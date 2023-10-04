import Papa, { ParseResult } from 'papaparse'
import { Recipe } from './recipe'

async function readCSV(url: string): Promise<Recipe[]> {
    // process.env.PUBLIC_URL +  '/recipes.csv'
    return fetch(url)
        .then(r => r.text())
        .then((text: string) => {
            return Papa.parse<Recipe>(text, {
                delimiter: "|",
                header: true,
                skipEmptyLines: true
            })
        })
        .then((data: ParseResult<Recipe>) => {
            return data.data
        })
}

export default readCSV

