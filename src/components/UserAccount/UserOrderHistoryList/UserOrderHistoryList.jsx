import UserOrderHistoryItem from "../UserOrderHistoryItem/UserOrderHistoryItem";
import { List } from "./UserOrderHistoryList.styled";

// const orderHistory = [
//   {
//     _id: "1234",
//     status: "Доставлений",
//     date: "23 травня 2024 21:20",
//     products: [
//       {
//         productId: {
//           _id: "111",
//           name: "Adidas NMD_R1 Primeblue",
//           imgThumbnail:
//             "https://res.cloudinary.com/dvoqw6v9z/image/upload/v1709060621/pulse/sneakers/ms6rwfbbu7cbrjzvhmby.jpg",
//         },
//         quantity: 1,
//         priceByOne: 2346,
//         sizeId: "42",
//       },
//     ],
//   },
//   {
//     _id: "2345",
//     status: "Доставлений",
//     date: "23 травня 2024 21:20",
//     products: [
//       {
//         productId: {
//           _id: "222",
//           name: "Adidas NMD_R1 Primeblue",
//           imgThumbnail:
//             "https://res.cloudinary.com/dvoqw6v9z/image/upload/v1709060621/pulse/sneakers/ms6rwfbbu7cbrjzvhmby.jpg",
//         },
//         quantity: 1,
//         priceByOne: 2346,
//         sizeId: "42",
//       },
//       {
//         productId: {
//           _id: "333",
//           name: "Adidas NMD_R1 Primeblue",
//           imgThumbnail:
//             "https://res.cloudinary.com/dvoqw6v9z/image/upload/v1709060621/pulse/sneakers/ms6rwfbbu7cbrjzvhmby.jpg",
//         },
//         quantity: 1,
//         priceByOne: 2346,
//         sizeId: "42",
//       },
//     ],
//   },
//   {
//     _id: "3456",
//     status: "Доставлений",
//     date: "23 травня 2024 21:20",
//     products: [
//       {
//         productId: {
//           _id: "4444",
//           name: "Adidas NMD_R1 Primeblue",
//           imgThumbnail:
//             "https://res.cloudinary.com/dvoqw6v9z/image/upload/v1709060621/pulse/sneakers/ms6rwfbbu7cbrjzvhmby.jpg",
//         },
//         quantity: 1,
//         priceByOne: 2346,
//         sizeId: "42",
//       },
//     ],
//     },
//   {
//     _id: "4567",
//     status: "Доставлений",
//     date: "23 травня 2024 21:20",
//     products: [
//       {
//         productId: {
//           _id: "555",
//           name: "Adidas NMD_R1 Primeblue",
//           imgThumbnail:
//             "https://res.cloudinary.com/dvoqw6v9z/image/upload/v1709060621/pulse/sneakers/ms6rwfbbu7cbrjzvhmby.jpg",
//         },
//         quantity: 1,
//         priceByOne: 2346,
//         sizeId: "42",
//       },
//       {
//         productId: {
//           _id: "666",
//           name: "Adidas NMD_R1 Primeblue",
//           imgThumbnail:
//             "https://res.cloudinary.com/dvoqw6v9z/image/upload/v1709060621/pulse/sneakers/ms6rwfbbu7cbrjzvhmby.jpg",
//         },
//         quantity: 1,
//         priceByOne: 2346,
//         sizeId: "42",
//         },
//       {
//         productId: {
//           _id: "777",
//           name: "Adidas NMD_R1 Primeblue",
//           imgThumbnail:
//             "https://res.cloudinary.com/dvoqw6v9z/image/upload/v1709060621/pulse/sneakers/ms6rwfbbu7cbrjzvhmby.jpg",
//         },
//         quantity: 2,
//         priceByOne: 2346,
//         sizeId: "42",
//       },
//     ],
//   },
// ];

const UserOrderHistoryList = ({ orders }) => {
  return (
    <List>
      {orders?.map(item => (
        <UserOrderHistoryItem key={item._id} item={item} />
      ))}
    </List>
  );
};

export default UserOrderHistoryList;
