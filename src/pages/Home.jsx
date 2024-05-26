import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="bg-rose-50">
      <Banner />
      <Products data={data} />
      <Accordian />
    </div>
  );
};

export default Home;