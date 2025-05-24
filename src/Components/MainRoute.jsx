import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Recipe from "./Recipe";
import About from "./About";
import Services from "./Services";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
