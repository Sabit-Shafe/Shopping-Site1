/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-3xl font-bold text-center text-rose-700">Our T-Shirts</h1>

      <div className="flex gap-2 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((shirt) => (
            <SingleProduct key={shirt.id} shirt={shirt} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;