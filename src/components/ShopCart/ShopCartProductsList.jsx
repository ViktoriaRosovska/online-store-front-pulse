import { ShopCard } from "./ShopCard/ShopCard";

export const ShopCartProductsList = ({ products, isDesktop }) => {
  return (
    <ul>
      {products.map((el, idx) => {
        return (
          <ShopCard
            el={el}
            key={el._id + "#" + idx}
            showCloseBtn={false}
            showDeliveryPrice={isDesktop}
            device={isDesktop ? "desktop" : "mobile"}
          />
        );
      })}
    </ul>
  );
};
