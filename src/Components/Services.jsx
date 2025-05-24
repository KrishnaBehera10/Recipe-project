import { useContext } from "react";
import { contextData } from "../useContext/MainContext";
import { useNavigate } from "react-router";
import { TfiFaceSad } from "react-icons/tfi";
function Services() {
  const { data, setdata } = useContext(contextData);
  const Navigate = useNavigate();
  function HandleNavigate(id) {
    Navigate(`/about/${id}`);
  }
  function removeAll() {
    setdata((pre) => []);
  }
  if (data.length == 0) {
    return (
      <p className="text-2xl font-medium text-zinc-600 inline-flex items-center gap-2 justify-center w-full h-[90vh] ">
        Services box is empty
        <span>
          <TfiFaceSad />
        </span>
      </p>
    );
  }
  function remove(id) {
    setdata((pre) => pre.filter((item) => item.id !== id));
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light mb-5">Recipe Service</h1>
        {data.length != 0 && (
          <button
            className="border-b border-red-500 text-red-500 text-sm whitespace-nowrap font-medium cursor-pointer active:scale-90 "
            onClick={removeAll}
          >
            Remove all
          </button>
        )}
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full relative group overflow-hidden  transition-transform duration-400 group-hover:bottom-110 border-1 border-gray-100"
            >
              <div className="w-full h-[200px]">
                <img
                  src={data.imagepath}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-3 absolute bottom-[-100%] w-[100%] transition-all duration-300 group-hover:bottom-0  bg-white">
                <p className="text-sm mb-2 px-2 font-medium ">
                  Title : <span className="font-light">{data.title}</span>
                </p>
                <div className="flex items-center flex-wrap gap-2">
                  <button
                    className="bg-zinc-600 text-white py-2 px-5  text-xs cursor-pointer whitespace-nowrap"
                    onClick={() => HandleNavigate(data.id)}
                  >
                    More details
                  </button>
                  <button
                    className="bg-red-400 text-white py-2 px-5  text-xs cursor-pointer"
                    onClick={() => remove(data.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
