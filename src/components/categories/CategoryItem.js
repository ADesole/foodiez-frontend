const CategoryItem = ({ category }) => {
  return (
    <>
      <button
        //onClick={() => displayCategoryContent(category._id)}
        className="categoryItem"
      >
        {category.name}
      </button>
    </>
  );
};

export default CategoryItem;
