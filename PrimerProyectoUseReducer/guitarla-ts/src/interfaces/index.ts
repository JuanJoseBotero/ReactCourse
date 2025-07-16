export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

// CartItem type extends Guitar and adds a quantity property

export type CartItem = Guitar & {
    quantity: number;
}

/* // CartItemWithPick type uses Pick to select specific properties from Guitar
export type CartItemWithPick = Pick<Guitar, 'id' | 'name' | 'image' | 'price'> & {
    quantity: number;
}

// CartItemWithOmit type uses Omit to exclude the description property from Guitar
export type CartItemWithOmit = Omit<Guitar, 'description'> & {
    quantity: number;
}
 */
