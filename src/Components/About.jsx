import { useParams } from "react-router-dom";
import { useContext } from "react";
import { contextData } from "../useContext/MainContext";
import { useNavigate } from "react-router-dom";

function About() {
  const { id } = useParams();
  const { data } = useContext(contextData);
  const filterdata = data.filter((item) => item.id === id);
  const Navigate = useNavigate();

  return (
    <div className="w-full h-full flex justify-center">
      {filterdata.map((data) => {
        return (
          <div key={data.id} className="w-[500px]">
            <img
              src={data.imagepath}
              alt=""
              className="w-full aspect-[1/1] object-cover mb-4"
            />
            <p className="font-medium">
              Title : <span className="font-light">{data.title}</span>
            </p>
            <p className="font-medium">
              Descroption :
              <span className="font-light"> {data.description}</span>
            </p>
            <p className="font-medium">
              Ingredients :
              <span className="font-light">{data.ingredients}</span>
            </p>
            <button
              onClick={() => Navigate("/service")}
              className="bg-zinc-500 py-2 px-4  text-white mt-5 cursor-pointer"
            >
              Back to Service
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default About;
