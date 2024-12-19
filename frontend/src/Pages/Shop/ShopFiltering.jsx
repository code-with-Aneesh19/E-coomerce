import React from "react";

const ShopFiltering = ({
  filters,
  filtersState,
  setFiltersState,
  clearFilters,
}) => {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3>Filters</h3>

      {/* Category Filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Category</h4>
        <hr />
        {filters.Categories.map((category) => (
          <label
            key={category}
            htmlFor={`category-${category}`}
            className="capitalize cursor-pointer flex items-center space-x-2"
          >
            <input
              type="radio"
              name="category"
              id={`category-${category}`}
              value={category}
              checked={filtersState.category === category}
              onChange={(e) =>
                setFiltersState((prevState) => ({
                  ...prevState,
                  category: e.target.value,
                }))
              }
              className="cursor-pointer"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>

      {/* color */}

      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Color</h4>
        <hr />
        {filters.colors.map((color) => (
          <label
            key={color}
            htmlFor={`color-${color}`}
            className="capitalize cursor-pointer flex items-center space-x-2"
          >
            <input
              type="radio"
              name="color"
              id={`color-${color}`}
              value={color}
              checked={filtersState.color === color}
              onChange={(e) =>
                setFiltersState((prevState) => ({
                  ...prevState,
                  color: e.target.value,
                }))
              }
              className="cursor-pointer"
            />
            <span className="ml-1">{color}</span>
          </label>
        ))}
      </div>

      {/* pricing */}

      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Price Range</h4>
        <hr />
        {filters.priceRanges.map((priceRange) => (
          <label
            key={`${priceRange.min}-${priceRange.max}`}
            htmlFor={`priceRange-${priceRange.min}-${priceRange.max}`}
            className="capitalize cursor-pointer flex items-center space-x-2"
          >
            <input
              type="radio"
              name="priceRange"
              id={`priceRange-${priceRange.min}-${priceRange.max}`}
              value={`${priceRange.min}-${priceRange.max}`}
              checked={
                filtersState.priceRanges ===
                `${priceRange.min}-${priceRange.max}`
              }
              onChange={(e) =>
                setFiltersState((prevState) => ({
                  ...prevState,
                  priceRanges: e.target.value, // Update state with the selected range
                }))
              }
              className="cursor-pointer"
            />
            <span className="ml-1">{priceRange.label}</span>
          </label>
        ))}
      </div>

      {/* clear filters  */}
      <button
        onClick={clearFilters}
        className="bg-primary py-1 text-white rounded"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default ShopFiltering;
