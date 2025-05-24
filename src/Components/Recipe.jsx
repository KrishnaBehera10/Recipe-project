import { useForm } from "react-hook-form";
import { contextData } from "../useContext/MainContext";
import { useContext } from "react";
function Recipe() {
  const { data: data2, setdata } = useContext(contextData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  function Handleclick(data) {
    const Obj = {
      imagepath: data.url,
      title: data.title,
      description: data.description,
      ingredients: data.ingredients,
      id: crypto.randomUUID(),
    };
    setdata((pre) => [...pre, Obj]);
    reset();
  }
  return (
    <div>
      <h1 className="text-4xl font-light">Add Recipe...</h1>
      <div className="w-full h-[80vh] flex items-center justify-evenly gap-5">
        <div className="w-[400px] h-[400px] rounded overflow-hidden hidden sm:block">
          <img
            src="https://images.unsplash.com/photo-1708335583165-57aa131a4969?q=80&w=3250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>

        <form onSubmit={handleSubmit(Handleclick)}>
          <input
            type="url"
            {...register("url", { required: "URL required" })}
            placeholder="URL image"
            className="border-b outline-0 mb-5"
          />
          <p className="text-red-600"> {errors.url && errors.url.message}</p>
          <br />
          <input
            type="text"
            {...register("title", { required: "Recipe Name is required" })}
            placeholder="Recipe title"
            className="border-b w-full outline-0 mb-5"
          />
          <p className="text-red-600">{errors.title && errors.title.message}</p>
          <br />
          <textarea
            className="resize-none border-b outline-0 mb-5 w-full"
            placeholder="write somethink aboute recipe"
            {...register("description", {
              required: "Description is required",
            })}
          />
          <p className="text-red-600">
            {errors.description && errors.description.message}
          </p>
          <br />
          <textarea
            className="resize-none border-b outline-0 mb-5 w-full"
            placeholder="write ingredients aboute recipe"
            {...register("ingredients", {
              required: "Ingredinets is required",
            })}
          />
          <p className="text-red-600">
            {errors.ingredients && errors.ingredients.message}
          </p>
          <br />
          <button
            type="submit"
            className="bg-zinc-500 text-white py-2 px-5  cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Recipe;
