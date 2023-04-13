import { GetData } from "../Functions/CRUD"

export const FoodCalcules = (data) => {
    let fruits = 0
    let vegetables = 0
    let meat = 0
    let bakery = 0
    let dairy = 0
    let snacks = 0
    let drinks = 0
    let dishes = 0

    data?.map(item=>(
        item.type === "fruits" && (fruits = fruits + 1),
        item.type === "vegetables" && (vegetables = vegetables + 1),
        item.type === "meat" && (meat = meat + 1),
        item.type === "bakery" && (bakery = bakery + 1),
        item.type === "dairy" && (dairy = dairy + 1),
        item.type === "snacks" && (snacks = snacks + 1),
        item.type === "drinks" && (drinks = drinks + 1),
        item.type === "dishes" && (dishes = dishes + 1)
    ))

    return {fruits, vegetables, meat, bakery, dairy, snacks, drinks, dishes}
}