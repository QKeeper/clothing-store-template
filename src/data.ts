export const getData = (array: Array<any>): ProductSheme =>
	array[Math.floor(Math.random() * array.length)];

class ProductSheme {
	constructor(public src: string, public name: string, public price: number) {}
}

export const shoes = [
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-u/wc1000/6814057602.jpg",
		"Полуботинки RockMerch",
		12440
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-e/wc1000/6830259026.jpg",
		"Ботинки FESS",
		2615
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-y/wc1000/6031990714.jpg",
		"Берцы GUSTAS",
		4800
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-2/wc1000/6895497998.jpg",
		"Ботинки Goodhunt",
		11833
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-m/wc1000/6527716282.jpg",
		"Полуботинки Alessio Nesca",
		2372
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-l/wc1000/6701816361.jpg",
		"Ботинки Alessio Nesca",
		2941
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-v/wc1000/6751096483.jpg",
		"Ботинки T.TACCARDI",
		2093
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-0/wc1000/6801316848.jpg",
		"Полуботинки KRAVEO",
		4364
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-x/wc1000/6808911909.jpg",
		"Ботинки Alessio Nesca",
		1993
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-f/wc1000/6858170547.jpg",
		"Ботинки Leomax",
		922
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-8/wc1000/6825599468.jpg",
		"Ботинки T.TACCARDI",
		2143
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-r/wc1000/6671840883.jpg",
		"Полуботинки Geox U Vicenda",
		5417
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-b/wc1000/6722178635.jpg",
		"Полуботинки SANIANO",
		2895
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-v/wc1000/6827816551.jpg",
		"Ботинки Kumman",
		3837
	),
];

export const outerwear = [
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-c/wc1000/6800742084.jpg",
		"Пальто пуховое viniroom Boutique. Итальянская мода (журнал)",
		8436
	),
	new ProductSheme("https://ir-2.ozone.ru/s3/multimedia-8/wc1000/6788939732.jpg", "Дубленка", 8259),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-f/wc1000/6810721251.jpg",
		"Куртка J.Silwear",
		4790
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-y/wc1000/6844087798.jpg",
		"Куртка J.Silwear",
		4790
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-3/wc1000/6786508431.jpg",
		"Куртка Vizani",
		6856
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-w/wc1000/6844565192.jpg",
		"Куртка AURORA'S DREAM",
		9844
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-1-a/wc1000/6922431082.jpg",
		"Куртка Modis",
		3779
	),
	new ProductSheme("https://ir-2.ozone.ru/s3/multimedia-1-n/wc1000/6907211087.jpg", "Парк", 4700),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-5/wc1000/6733617665.jpg",
		"Куртка O'STIN",
		1654
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-u/wc1000/6827810466.jpg",
		"Куртка CITY RACE",
		3561
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-j/wc1000/6600751675.jpg",
		"Куртка LTB Meyoso",
		2132
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-j/wc1000/6793023691.jpg",
		"Пуховик D2L",
		5067
	),
	new ProductSheme(
		"https://ir-2.ozone.ru/s3/multimedia-h/wc1000/6777375281.jpg",
		"Парка Город Горький",
		3891
	),
];
