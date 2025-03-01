import React from "react";

const ProductTypeCard = ({ urlImg, title }) => {
  return (
    <div className="relative w-5/12 mx-5 my-14">
      <img
        className="w-full h-full object-cover object-center"
        src={urlImg}
        alt=""
      />
      <div className="absolute top-1/3 left-4">
        <h1 className="text-white z-10 text-xl mb-2">xu huong</h1>
        <hr />
        <h1 className="text-white z-10 text-3xl mt-2">{title}</h1>
      </div>
    </div>
  );
};

export default ProductTypeCard;
