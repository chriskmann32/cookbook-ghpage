import Papa, { ParseResult } from 'papaparse'
import { Recipe } from './recipe'
import { Ingredients } from './ingredient'
import { Instructions } from './instructions'

export async function readRecipeCSV(url: string): Promise<Recipe[]> {
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

export async function readIngredientsCSV(url: string): Promise<Ingredients[]> {
    // process.env.PUBLIC_URL +  '/ingredients.csv'
    return fetch(url)
        .then(r => r.text())
        .then((text: string) => {
            return Papa.parse<Ingredients>(text, {
                delimiter: "|",
                header: true,
                skipEmptyLines: true
            })
        })
        .then((data: ParseResult<Ingredients>) => {
            return data.data
        })
}

export async function readInstructionsCSV(url: string): Promise<Instructions[]> {
    // process.env.PUBLIC_URL +  '/instructions.csv'
    return fetch(url)
        .then(r => r.text())
        .then((text: string) => {
            return Papa.parse<Instructions>(text, {
                delimiter: "|",
                header: true,
                skipEmptyLines: true
            })
        })
        .then((data: ParseResult<Instructions>) => {
            return data.data
        })
}
