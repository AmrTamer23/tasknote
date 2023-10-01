import React from "react";
import { useParams } from "react-router-dom";

const CategoryLayout = () => {
  let { categoryId } = useParams<{ categoryId: string }>();

  return (
    <div>
      <h1>Category {categoryId}</h1>
    </div>
  );
};
export default CategoryLayout;
