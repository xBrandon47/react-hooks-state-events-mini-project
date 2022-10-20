import React from "react";

function CategoryFilter({categories, selectedCategory, onSelect}) {

const categoryButton = categories.map((category) => {
  const className= category === selectedCategory ? "selelcted" : null;
  return (
    <button key= {category} className={className} onClick= {() => onSelect(category)}> {category}</button>
  )
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
