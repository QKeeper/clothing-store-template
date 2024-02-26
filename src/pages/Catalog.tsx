import { useLocation } from "react-use";
import { Button } from "@/components/ui/button";
import { loremIpsum, fullname } from "react-lorem-ipsum";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useIsInViewport } from "@/hooks/on-screen-hook";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addProduct, selectProducts } from "@/features/cartSlice";
import { getData, outerwear, shoes } from "@/data";
import { displayPrice } from "@/lib/utils";

const Catalog = () => {
	const location = useLocation();
	const [products, setProducts] = useState<ProductProps[]>([]);
	const bottomDivRef = useRef<HTMLDivElement | null>(null);
	const scrolled = useIsInViewport(bottomDivRef, [products]);

	useEffect(() => {
		setProducts(newProducts(18));
		window.scroll({ top: 0 });
	}, [location.pathname]);

	useEffect(() => {
		if (scrolled) setProducts([...products, ...newProducts(18)]);
	}, [scrolled]);

	function newProducts(amount: number = 18): ProductProps[] {
		return Array.from(new Array(amount)).map(() => {
			const data = getData(location.pathname !== "/shoes" ? outerwear : shoes);
			return {
				author: fullname(),
				title:
					data.name ||
					loremIpsum({
						p: 1,
						avgSentencesPerParagraph: 1,
						avgWordsPerSentence: 3,
						random: true,
						startWithLoremIpsum: false,
					})[0],
				price: data.price || Math.round(Math.random() * 4800) + 200,
				imgsrc: data.src || "https://via.placeholder.com/300x400",
			};
		});
	}

	return (
		<div className="container mt-16 mb-8 *:select-none">
			<div className="rounded-lg overflow-hidden border h-28 sm:h-32 md:h-48">
				<img
					src="banner.webp"
					alt="sales"
					className="pointer-events-none object-cover h-full w-full"
				/>
			</div>
			<h1 className="text-center text-2xl font-bold mt-2 py-2 bg-neutral-100 rounded-lg">
				{location.pathname === "/shoes" ? "Обувь" : "Верхняя одежда"}
			</h1>
			<div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4 mt-2">
				{products.map(({ author, title, price, imgsrc }, idx) => (
					<Product key={idx} author={author} title={title} price={price} imgsrc={imgsrc} />
				))}
				<div ref={bottomDivRef} className="mt-[-999px]"></div>
			</div>
			<Button
				onClick={() => setProducts([...products, ...newProducts(18)])}
				className="w-full"
				size="lg"
			>
				Load more
			</Button>
		</div>
	);
};

export default Catalog;

export interface ProductProps {
	title: string;
	author: string;
	price: number;
	imgsrc: string;
}

function Product(props: ProductProps) {
	const dispatch = useAppDispatch();
	const products = useAppSelector(selectProducts);

	return (
		<div className="flex flex-col gap-2">
			<picture className="bg-neutral-100 aspect-[3/4] rounded-lg pointer-events-none overflow-hidden">
				<img className="object-cover h-full w-full" src={props.imgsrc} alt="product" />
			</picture>
			<div about="product description" className="truncate rounded">
				<h2 className="text-ellipsis overflow-hidden truncate">{props.title}</h2>
				<h3 className="text-ellipsis overflow-hidden opacity-50 text-sm">{props.author}</h3>{" "}
			</div>
			<Button
				className="rounded-lg"
				onClick={() => {
					dispatch(addProduct(props));
				}}
				variant={
					products.some(
						(item) =>
							item.author == props.author && item.title == props.title && item.price == props.price
					)
						? "secondary"
						: "default"
				}
			>
				<ShoppingCart className="w-5 h-5 mr-2" />
				{displayPrice(props.price)} ₽
			</Button>
		</div>
	);
}
