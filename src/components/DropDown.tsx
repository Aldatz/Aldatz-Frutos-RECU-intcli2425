import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { megaEpicFortress } from '../data/data'
import { Towers } from '../types/megaEpicFortress'

interface DropDownProps {
}

const DropDown: React.FC<DropDownProps> = ({ }) => {

    const tower = megaEpicFortress.defenses.towers
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Select Weapon ▼
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    {tower.map((tower: Towers, towerIndex) => (
                        <MenuItem
                            key={towerIndex}>
                            <a
                                // onClick={}
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                {tower.armament.weaponType}

                            </a>
                        </MenuItem>
                    ))}

                </div>
            </MenuItems>
        </Menu>
    )
}

export default DropDown