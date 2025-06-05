"use client"

import { useState } from "react"
import Button from "../ui/button"

interface Category {
  key: string;
  value: string;
}

const categories: Category[] = [
  { key: "all", value: "Hammasi" },
  { key: "current", value: "Dolzarb" },
  { key: "new", value: "Yangi" },
  { key: "old", value: "Oldingi" },
  { key: "popular", value: "Mashhur" },
  { key: "professional", value: "Mukammal" },
];

interface CategoryProps {
  setCategory: (category: string) => void
}

const Category = ({ setCategory }: CategoryProps) => {
    const [active, setActive] = useState("Hammasi") 
    const clickHandler = (category: string) => {
      setActive(category)
      setCategory(category)
    }

    return (
      <div className="overflow-x-auto py-4 border-b border-slate-700">
        <div className="flex gap-4 min-w-max px-4">
          {categories.map((category: Category) => (
            <Button 
                label={category.value} 
                roundedNone 
                key={category.key} 
                active={active === category.key} 
                onClick={() => clickHandler(category.key)}  
            />
          ))}
        </div>
      </div>
    )
}

export default Category
