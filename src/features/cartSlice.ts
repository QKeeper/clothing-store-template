import { createAppSlice } from "@/app/createAppSlice";
import { ProductProps } from "@/pages/Catalog";
import { PayloadAction } from "@reduxjs/toolkit";

export type CartProducts = {
	title: string;
	author: string;
	price: number;
	imgsrc: string;
	quantity: number;
};

interface CartSliceState {
	products: CartProducts[];
}

const initialState: CartSliceState = {
	products: [],
};

export const cartSlice = createAppSlice({
	name: "cart",
	initialState,
	reducers: (create) => ({
		loadCart: create.reducer((state) => {
			state.products = JSON.parse(localStorage.getItem("products") || "[]");
		}),
		addProduct: create.reducer((state, action: PayloadAction<ProductProps>) => {
			let addedFlag = false;
			const new_arr = state.products.map((item) => {
				if (
					item.author == action.payload.author &&
					item.title == action.payload.title &&
					item.price == action.payload.price
				) {
					addedFlag = true;
					return { ...item, quantity: item.quantity + 1 };
				} else return { ...item };
			});
			state.products = addedFlag ? new_arr : [...new_arr, { ...action.payload, quantity: 1 }];
			localStorage.setItem("products", JSON.stringify(state.products));
		}),
		increaseQuantity: create.reducer((state, action: PayloadAction<ProductProps>) => {
			state.products = state.products.map((item) => {
				if (
					item.author == action.payload.author &&
					item.title == action.payload.title &&
					item.price == action.payload.price
				)
					return { ...item, quantity: item.quantity + 1 };
				else return item;
			});
			localStorage.setItem("products", JSON.stringify(state.products));
		}),
		decreseQuantity: create.reducer((state, action: PayloadAction<ProductProps>) => {
			state.products = state.products
				.map((item) => {
					if (
						item.author == action.payload.author &&
						item.title == action.payload.title &&
						item.price == action.payload.price
					) {
						return { ...item, quantity: item.quantity - 1 };
					} else return item;
				})
				.filter((item) => item.quantity != 0);
			localStorage.setItem("products", JSON.stringify(state.products));
		}),
	}),
	selectors: {
		selectProductsCount: (cart) => cart.products.reduce((a, c) => a + c.quantity, 0),
		selectProducts: (cart) => cart.products,
	},
});

export const { addProduct, loadCart, increaseQuantity, decreseQuantity } = cartSlice.actions;
export const { selectProducts, selectProductsCount } = cartSlice.selectors;
