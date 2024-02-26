import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function displayPrice(value: number) {
	return value
		.toString()
		.split("")
		.reverse()
		.map((val, idx) => (idx % 3 ? val : val + " "))
		.reverse()
		.join("");
}
