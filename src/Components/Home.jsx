import food from "../asset/food.png";
import tomato from "../asset/tomato.png";
import vegitable from "../asset/food2.png";
import { useNavigate } from "react-router";

function Home() {
  const naviGate = useNavigate();

  return (
    <div className="w-full h-[500px] relative">
      <div className="w-full bg-[#f5faf8] h-[150px] md:h-[250px] flex flex-col justify-center items-center rounded-3xl p-5 relative">
        <h1 className="text-xl sm:text-3xl md:text-6xl font-bold mb-2 md:mb-5 text-center">
          Cooking fresh, very easy
        </h1>
        <p className="text-center text-xs md:text-sm md:font-medium">
          find great recies,order ingredients,start cooking
        </p>
        <img
          src={tomato}
          alt=""
          className="w-[100px] absolute bottom-[-55px] left-0 sm:w-[120px] md:w-[200px] "
        />
      </div>
      <div id="viewRecipe" className="mt-10 md:mt-20">
        <div className="w-full">
          <p className="mb-5 text-sm font-medium md:w-[28%]">
            This recipe is a perfect blend of flavor and simplicity. Made with
            everyday ingredients and packed with taste, it’s ideal for lunch,
            dinner, or even a quick get-together. Whether you're a beginner or a
            pro in the kitchen, this dish is easy to follow and guaranteed to
            impress your family and friends.
          </p>
          <button
            className="bg-zinc-500 text-white text-xs py-3 px-5 cursor-pointer"
            onClick={() => naviGate("/recipe")}
          >
            View Recipe Now
          </button>
        </div>
      </div>
      <img
        src={food}
        alt=""
        className="w-[210px] h-[250px] md:h-[500px] md:w-[500px] z-10 object-contain absolute bottom-[-10%] left-[50%] -translate-x-[50%] -translate-y-[0%] md:top-[80%] md:left-[50%] md:-translate-x-[50%]  md:-translate-y-[45%]"
      />
      <img
        src={vegitable}
        alt=""
        className="w-[100px] absolute bottom-[-10%] right-0 sm:w-[120px] md:w-[300px]"
      />
    </div>
  );
}

export default Home;
