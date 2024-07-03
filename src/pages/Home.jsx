import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loadingSkeleton, setLoadingSkeleton] = React.useState(true);

  React.useEffect(() => {
    fetch("https://667ebb28f2cb59c38dc6d566.mockapi.io/items").then((res) => {
      return res.json().then((arr) => {
        setItems(arr);
        setLoadingSkeleton(false);
      });
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loadingSkeleton
          ? [...new Array(6)].map(() => <Skeleton />)
          : items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
