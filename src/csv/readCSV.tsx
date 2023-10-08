import Papa, { ParseResult } from 'papaparse'
import { Recipe } from './recipe'
import { Ingredient } from './ingredient'
import { Instruction } from './instruction'

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

export async function readIngredientsCSV(url: string): Promise<Ingredient[]> {
    // process.env.PUBLIC_URL +  '/ingredient.csv'
    return fetch(url)
        .then(r => r.text())
        .then((text: string) => {
            return Papa.parse<Ingredient>(text, {
                delimiter: "|",
                header: true,
                skipEmptyLines: true
            })
        })
        .then((data: ParseResult<Ingredient>) => {
            return data.data
        })
}

export async function readInstructionsCSV(url: string): Promise<Instruction[]> {
    // process.env.PUBLIC_URL +  '/instruction.csv'
    return fetch(url)
        .then(r => r.text())
        .then((text: string) => {
            return Papa.parse<Instruction>(text, {
                delimiter: "|",
                header: true,
                skipEmptyLines: true
            })
        })
        .then((data: ParseResult<Instruction>) => {
            return data.data
        })
}
