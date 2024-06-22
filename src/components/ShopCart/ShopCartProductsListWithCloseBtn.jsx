import { ShopCard } from "./ShopCard/ShopCard";

export const ShopCartProductsListWithCloseBtn = ({ products, isDesktop }) => {
  return (
    <ul>
      {products.map((el, idx) => {
        return (
          <ShopCard
            el={el}
            key={el._id + "#" + idx}
            showCloseBtn={true}
            showDeliveryPrice={false}
            device={isDesktop ? "desktop" : "mobile"}
          />
        );
      })}
    </ul>
  );
};
