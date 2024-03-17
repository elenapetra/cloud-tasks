import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

// export const products: Product[] = [
//   {
//     description: "Short Product Description1",
//     id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
//     price: 24,
//     title: "Product 1",
//   },
//   {
//     description: "Short Product Description7",
//     id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
//     price: 15,
//     title: "Product 2",
//   },
//   {
//     description: "Short Product Description2",
//     id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
//     price: 23,
//     title: "Product 3",
//   },
//   {
//     description: "Short Product Description4",
//     id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
//     price: 15,
//     title: "Product 4",
//   },
//   {
//     description: "Short Product Descriptio1",
//     id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
//     price: 23,
//     title: "Product 5",
//   },
//   {
//     description: "Short Product Description7",
//     id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
//     price: 15,
//     title: "Product 6",
//   },
// ];

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://zq3zdypgs7.execute-api.eu-west-1.amazonaws.com/dev/products",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const products = await response.json();
      console.log("products: ", products);
      return products;
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export const products = await fetchProducts();
console.log(products);

export const availableProducts: AvailableProduct[] = products.map(
  (product: any, index: number) => ({ ...product, count: product.count })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
