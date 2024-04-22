import {
  ModalShopCartTitle,
  StyledModalShopCartWrapper,
  StyledProductName,
  StyledShopCartDescription,
  StyledShopCartImage,
  StyledShopCartPosition,
} from "./ModalShopCart.styled";

export const ModalShopCart = ({ productData, sizeValue, onClose }) => {
  const handleAddToCart = () => {
    // Создаем объект с данными о продукте
    const product = {
      id: productData.id, // Уникальный идентификатор продукта
      name: name,
      price: price,
      color: categories.color[0].name,
      size: sizeValue,
      quantity: 1, // Количество, в данном случае 1
      imageUrl: imgGallery[0], // URL изображения
    };

    // Получаем текущий список товаров в корзине из localStorage
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Добавляем новый продукт в корзину
    const updatedCart = [...currentCart, product];

    // Сохраняем обновленный список товаров в localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Закрываем модальное окно после добавления в корзину
  };

  if (!productData) return null;

  const { name, price, categories, imgGallery } = productData;
  return (
    <StyledModalShopCartWrapper>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 10,
          right: 20,
          padding: "8px",
          background: "none",
          border: "none",
          fontSize: 36,
        }}
      >
        x
      </button>
      <ModalShopCartTitle>Додати в кошик</ModalShopCartTitle>
      <StyledShopCartPosition>
        <StyledShopCartImage src={imgGallery[0]} alt={name} />
        <StyledShopCartDescription>
          <StyledProductName>{name}</StyledProductName>
          <p>{price} грн</p>
          <p>Color:{categories.color[0].name}</p>
          <p>Розмір:{sizeValue} </p>
          <p>Кількість:1</p>
        </StyledShopCartDescription>
      </StyledShopCartPosition>
      <div></div>
      <p>Кошик</p>
      <p>Усього товарів:1</p>
      <p>Вартість:{price} грн</p>
      <button onClick={handleAddToCart}>Оформити</button>
      <button onClick={handleAddToCart}>Продовжити покупки</button>
    </StyledModalShopCartWrapper>
  );
};
