import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p className="mt-4 text-lg">Product ID: {id}</p>
    </div>
  );
}
