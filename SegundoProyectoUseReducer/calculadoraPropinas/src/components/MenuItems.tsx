import type { MenuItem } from '../types'

type MenuItemProps = {
    item: MenuItem
    addToCart: (addItem: MenuItem) => void;
  }

export default function MenuItem({item, addToCart}: MenuItemProps) {
  return (
    <button className='border-2 border-teal-400 w-full p-3 hover:bg-teal-200 flex justify-between' onClick={() => addToCart(item)}>
        <p> {item.name} </p>
        <p className='font-black'> ${item.price} </p>
    </button>
  )
}
