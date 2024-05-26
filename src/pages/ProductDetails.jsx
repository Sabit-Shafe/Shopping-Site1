import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="bg-rose-50">
      <h1 className="text-5xl text-center font-bold">{title}</h1>

      <img className="h-[600px] mt-5 ms-10 " src={image_url} alt="product image" />

      <h3 className="text-2xl mt-5 ms-10 font-semibold">{price} $</h3>
      <h3 className="text-xl  ms-10 font-semibold">{brand}</h3>
      <p className="text-lg  ms-10 font-light">{description}</p>
      <button className="btn btn-primary bg-orange-600 mt-5 mb-10 ms-10">Purchase
      </button>
    </div>
  );
};

export default ProductDetails;