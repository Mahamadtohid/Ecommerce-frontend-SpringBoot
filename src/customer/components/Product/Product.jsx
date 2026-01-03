'use client'

import ProductCard from './ProductCard'
import { mens_kurta } from "../../../Data/mens_kurta"
import { filters, singleFilter } from './FilterData'

import {
  Checkbox,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from '@mui/material'

import FilterListIcon from '@mui/icons-material/FilterList'
import { useState } from 'react'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/20/solid'

import { useLocation, useNavigate } from 'react-router-dom'

const sortOptions = [
  { name: 'Price: Low to High' },
  { name: 'Price: High to Low' },
]

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  /* ---------------- URL HELPERS ---------------- */

  const getParamValues = (key) => {
    const params = new URLSearchParams(location.search)
    return params.get(key)
  }

  const getMultiValues = (key) => {
    return getParamValues(key)?.split(',') || []
  }

  /* ---------------- HANDLERS ---------------- */

  // Checkbox (multi)
  const handleCheckboxFilter = (value, key) => {
    const params = new URLSearchParams(location.search)
    const selected = getMultiValues(key)

    const updated = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value]

    updated.length
      ? params.set(key, updated.join(','))
      : params.delete(key)

    navigate({ search: `?${params.toString()}` })
  }

  // Radio (single)
  const handleRadioFilter = (value, key) => {
    const params = new URLSearchParams(location.search)
    params.set(key, value)
    navigate({ search: `?${params.toString()}` })
  }

  /* ---------------- UI ---------------- */

  const renderCheckboxFilters = () =>
    filters.map(section => (
      <Disclosure key={section.id} as="div" className="group border-b py-6">
        <DisclosureButton className="flex w-full justify-between">
          <FormLabel>{section.name}</FormLabel>
          <PlusIcon className="size-5 group-data-[open]:hidden" />
          <MinusIcon className="size-5 hidden group-data-[open]:block" />
        </DisclosureButton>

        <DisclosurePanel className="pt-4">
          <FormControl>
            {section.options.map(option => (
              <FormControlLabel
                key={option.value}
                label={option.label}
                control={
                  <Checkbox
                    checked={getMultiValues(section.id).includes(option.value)}
                    onChange={() =>
                      handleCheckboxFilter(option.value, section.id)
                    }
                  />
                }
              />
            ))}
          </FormControl>
        </DisclosurePanel>
      </Disclosure>
    ))

  const renderRadioFilters = () =>
    singleFilter.map(section => (
      <Disclosure key={section.id} as="div" className="group border-b py-6">
        <DisclosureButton className="flex w-full justify-between">
          <FormLabel>{section.name}</FormLabel>
          <PlusIcon className="size-5 group-data-[open]:hidden" />
          <MinusIcon className="size-5 hidden group-data-[open]:block" />
        </DisclosureButton>

        <DisclosurePanel className="pt-4">
          <RadioGroup
            value={getParamValues(section.id) || ''}
            onChange={(e) =>
              handleRadioFilter(e.target.value, section.id)
            }
          >
            {section.options.map(option => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </DisclosurePanel>
      </Disclosure>
    ))

  /* ---------------- JSX ---------------- */

  return (
    <div className="bg-white">
      {/* MOBILE FILTER */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <DialogPanel className="fixed right-0 inset-y-0 w-80 bg-white p-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">Filters</h2>
            <XMarkIcon onClick={() => setMobileFiltersOpen(false)} className="size-6 cursor-pointer" />
          </div>
          {renderCheckboxFilters()}
          {renderRadioFilters()}
        </DialogPanel>
      </Dialog>

      <main className="px-6 lg:px-20">
        <div className="flex justify-between border-b py-6">
          <h1 className="text-3xl font-bold">New Arrivals</h1>

          <div className="flex items-center gap-4">
            <Menu>
              <MenuButton className="flex items-center gap-1">
                Sort <ChevronDownIcon className="size-5" />
              </MenuButton>
              <MenuItems className="absolute bg-white shadow">
                {sortOptions.map(opt => (
                  <MenuItem key={opt.name} className="px-4 py-2">
                    {opt.name}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            <button className="lg:hidden" onClick={() => setMobileFiltersOpen(true)}>
              <FunnelIcon className="size-5" />
            </button>
          </div>
        </div>

        <section className="grid lg:grid-cols-5 gap-10 pt-10">
          {/* FILTERS */}
          <aside className="hidden lg:block">
            <div className="flex justify-between items-center py-6">
              <h2 className="font-bold opacity-60">Filters</h2>
              <FilterListIcon />
            </div>

            {renderCheckboxFilters()}
            {renderRadioFilters()}
          </aside>

          {/* PRODUCTS */}
          <div className="lg:col-span-4 flex flex-wrap gap-4 justify-center">
            {mens_kurta.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
