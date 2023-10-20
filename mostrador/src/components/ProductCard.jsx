import { useNavigate } from "react-router-dom";

export function ProductCard({ Product }) {
  const navigate = useNavigate();
    console.log(Product)
  return (
    <div
      onClick={() => {
        navigate(`/productos/${Product.id}`);
      }}
    >
      <h1>{Product.id }</h1>
      {/* <p>{Product.description}</p> */}
      
    </div>
  );
}