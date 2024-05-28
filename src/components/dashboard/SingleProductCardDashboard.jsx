/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shirt, }) => {
  const { id, title, brand, description, image_url, price } = shirt;

  const handleDelete = async () => {
    const userConfirmed = window.confirm(
      'Are you sure you want to delete this product???'
    );
    if (!userConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/shirts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleDelete(id);
        toast.success('Product deleted successfully!');
      } else {
        console.error('Failed to delete product');
        toast.error('Failed to delete product.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while deleting the product.');
    }
  };



  return (
    <div className="card w-96 bg-lime-200 shadow-xl ">
      <ToastContainer/>
      <figure>
        <img className ="" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">Brand: {brand}</h3>
        <h3 className="text-xl font-semibold">price: {price}<span> $</span></h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white rounded-full">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white rounded-full">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;