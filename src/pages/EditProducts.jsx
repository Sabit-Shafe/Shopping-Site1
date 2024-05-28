
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EditProducts = () => {
  const shirt = useLoaderData();
  const { id, title, brand, price, description, image_url } = shirt;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const title = form.title.value;
    const description = (form.description.value);
    const price = Number(form.price.value);
    const image_url = form.image_url.value;
    const id = form.id.value;



    

    const inputData = { id, brand, title, image_url, description, price };
    

    const userConfirmed = window.confirm('Do you want to update this product?');
    if (!userConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/shirts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Product updated successfully!');
        form.reset();
      } else {
        toast.error('Failed to update product.');
      }
    } catch (error) {
      toast.error('An error occurred while updating the product.');
    }
  };

  return (
    <div className="bg-rose-50">
      <ToastContainer />
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={title}
              
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              defaultValue={brand}
              
            />
          </div>
         
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              defaultValue={price}
              
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={description}
              
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              defaultValue={image_url}
              
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              defaultValue={id}
              
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-2  bg-purple-500 text-white p-4"
              type="submit"
              defaultValue="Edit Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;