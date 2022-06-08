const CategoryItem = ({ category }) => {
  return (
    <>
      <button className="category-item">{category.name}</button>
    </>
  );
};

export default CategoryItem;
