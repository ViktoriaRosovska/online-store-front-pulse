import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalShopCartTitle } from "./Modal.styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 898,
  height: 467,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "36px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  openModal,
  closeModal,
  productData,
  sizeValue,
}) {
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
    closeModal();
  };

  if (!productData) return null;

  const { name, price, categories, imgGallery } = productData;
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            onClick={closeModal}
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
          <div>
            <img src={imgGallery[0]} alt="img" width={185} height={156} />
            <div>
              <p>{name}</p>
              <p>{price} грн</p>
              <p>Color:{categories.color[0].name}</p>
              <p>Розмір:{sizeValue} </p>
              <p>Кількість:1</p>
            </div>
          </div>
          <div></div>
          <p>Кошик</p>
          <p>Усього товарів:1</p>
          <p>Вартість:{price} грн</p>
          <button onClick={handleAddToCart}>Оформити</button>
          <button onClick={handleAddToCart}>Продовжити покупки</button>
        </Box>
      </Modal>
    </div>
  );
}
