import { Button } from "@/components/ui/button";
import {
	CartProducts,
	decreseQuantity,
	increaseQuantity,
	selectProducts,
	selectProductsCount,
	loadCart,
} from "@/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
	Eclipse,
	Footprints,
	MessageSquareHeart,
	Minus,
	Plus,
	Shirt,
	ShoppingCart,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn, displayPrice } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { useLocation, useTitle } from "react-use";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const cartCount = useAppSelector(selectProductsCount);
	const cartItems = useAppSelector(selectProducts);
	const location = useLocation();

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadCart());
	}, []);

	useTitle(
		"Lorem" +
			(() => {
				switch (location.pathname) {
					case "/shoes":
						return " • Обувь";
					case "/outerwear":
						return " • Верняя одежда";
					case "/reviews":
						return " • Отзывы";
					default:
						return "";
				}
			})()
	);

	return (
		<header className="fixed z-10 top-0 w-full bg-white bg-opacity-75 backdrop-blur-md border-b cursor-default *:select-none">
			<div className="container flex gap-4 items-center h-12">
				<div about="brand" className="flex items-center h-full">
					<Eclipse className="w-6 h-6 mr-2" />
					<p className="hidden sm:block text-xl font-medium">Lorem</p>
				</div>
				<nav className="flex gap-2">
					<NavLink to="/shoes" icon={<Footprints strokeWidth={1} />}>
						Обувь
					</NavLink>
					<NavLink to="/outerwear" icon={<Shirt strokeWidth={1} />}>
						Верхняя одежда
					</NavLink>
					<NavLink to="/reviews" icon={<MessageSquareHeart strokeWidth={1} />}>
						Отзывы
					</NavLink>
				</nav>
				<Popover>
					<PopoverTrigger className="ml-auto">
						<Button variant="outline">
							<ShoppingCart className="w-5 h-5 mr-2" />
							Корзина
							{!!cartCount && (
								<span className="bg-black text-white rounded px-1 ml-2 min-w-6">{cartCount}</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className={cn("w-screen sm:w-96 bg-white *:select-none", !cartCount && "hidden")}
					>
						<div className="max-h-[calc(100dvh-72px)] overflow-y-scroll sm:overflow-auto flex flex-col gap-2">
							<div className="flex flex-col gap-2">{cartItems.map((item) => CartItem(item))}</div>
							<Separator />
							<p className="flex font-bold text-lg">
								Итого:{" "}
								<span className="ml-auto">
									{displayPrice(cartItems.reduce((a, c) => a + c.price * c.quantity, 0))} ₽
								</span>
							</p>
							<Button>Оформить</Button>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</header>
	);
};

export default Header;

function CartItem(props: CartProducts) {
	const dispatch = useAppDispatch();

	return (
		<div className="flex items-center gap-2" key={props.author + props.title}>
			<div className="aspect-square overflow-hidden w-12 h-12 rounded">
				<picture>
					<img src={props.imgsrc} alt="product" className="object-cover h-full w-full"></img>
				</picture>
			</div>
			<div className="flex flex-col truncate w-40">
				<p className="text-ellipsis overflow-hidden">{props.title}</p>
				<p className="text-sm opacity-75 text-ellipsis overflow-hidden">{props.author}</p>
			</div>
			<div className="flex flex-col ml-auto">
				<p className="text-right font-medium">{displayPrice(props.price)} ₽</p>
				<div className="flex gap-1 items-center">
					<Button
						size="icon"
						variant="outline"
						className="w-8 h-8 sm:w-6 sm:h-6"
						onClick={() => dispatch(decreseQuantity(props))}
					>
						<Minus className="w-4 h-4" />
					</Button>
					<p className="text-sm text-right text-opacity-50">{props.quantity}</p>
					<Button
						size="icon"
						variant="outline"
						className="w-8 h-8 sm:w-6 sm:h-6"
						onClick={() => dispatch(increaseQuantity(props))}
					>
						<Plus className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}

interface NavLinkProps {
	to: string;
	icon: JSX.Element;
	children: string | JSX.Element | JSX.Element[];
}

function NavLink(props: NavLinkProps) {
	const navigate = useNavigate();
	return (
		<Button
			size="sm"
			variant={location.pathname === props.to ? "outline" : "ghost"}
			onClick={() => navigate(props.to)}
			className="aspect-square sm:aspect-auto"
		>
			<div className="*:w-5 *:h-5">{props.icon}</div>
			<div className="hidden sm:block ml-2">{props.children}</div>
		</Button>
	);
}
