import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getProduct, createProduct, deleteProduct, updateProduct } from "../api/Products.api";
import { useNavigate, useParams } from "react-router-dom";

export function ProductsFormPage() {


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProduct(params.id, data);
    } else {
      await createProduct(data);
    }
    navigate("/products");
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const res = await getProduct(params.id);
        console.log(res);
        setValue("nombre", res.data.nombre);

      } else {
      }
    }
    loadProduct();
  }, []);

  return (
    
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
        />
        {errors.title && <span>Title is required</span>}
        {/* <textarea
          cols="30"
          rows="10"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea> */}
        {/* {errors.description && <span>Description is required</span>} */}
        <button>Save</button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteTask(params.id);
              navigate("/products");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
