import { Separator } from "@/components/ui/separator";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Avatar, fullname, loremIpsum } from "react-lorem-ipsum";

const Reviews = () => {
	return (
		<div className="container mt-16 max-w-[1000px] *:select-none">
			<h1 className="text-center text-2xl font-bold">Отзывы клиентов</h1>
			<div className="flex flex-col gap-12 mt-4">
				{Array.from(new Array(12)).map(() => (
					<Review />
				))}
			</div>
			<div className="h-[150px]"></div>
		</div>
	);
};

export default Reviews;

type ReviewProps = {
	author?: string;
	title?: string;
	text?: string;
	grade?: number;
	rating?: number;
};

function Review(props: ReviewProps) {
	const grade = props.grade || Math.round(Math.random()) + 4;
	const rating = props.rating || Math.round(Math.random() * 250 + 1);

	return (
		<>
			<div className="hidden sm:block">
				<div className="flex gap-2">
					<div className="flex flex-col min-w-24 	max-w-24 items-center mr-4 py-2 h-fit rounded-2xl bg-neutral-50 border">
						<Avatar className="min-w-16 max-w-16 rounded-2xl" />
						<p className="font-medium text-center leading-4 mt-2 px-1">
							{props.author || fullname()}
						</p>
						<p className="text-center text-green-500 text-sm">+{rating}</p>
					</div>
					<div>
						<div className="flex gap-2 items-center">
							<div className="hidden sm:flex gap-1 items-center bg-black w-fit h-fit px-2 py-1 text-white rounded-xl font-bold">
								<StarFilledIcon />
								{grade}
							</div>
							<h2 className="font-medium text-xl">
								{props.title ||
									loremIpsum({
										p: 1,
										avgSentencesPerParagraph: 0,
										avgWordsPerSentence: 8,
										random: true,
										startWithLoremIpsum: false,
									})}
							</h2>
						</div>
						<p className="text-lg text-pretty">
							{props.text ||
								loremIpsum({
									p: 2,
									avgSentencesPerParagraph: 2,
									avgWordsPerSentence: 12,
									random: true,
									startWithLoremIpsum: false,
								})}
						</p>
					</div>
				</div>
			</div>
			<Separator className="hidden sm:block" />

			<ReviewMobile
				author={props.author}
				grade={grade}
				rating={rating}
				text={props.text}
				title={props.title}
			/>
		</>
	);
}

function ReviewMobile({ author, grade, rating, text, title }: ReviewProps) {
	return (
		<div className="block sm:hidden">
			<div className="flex flex-col gap-2">
				<div className="flex items-center p-2 h-fit rounded-2xl bg-neutral-50 border gap-2">
					<Avatar className="w-12 rounded-xl" />
					<div className="flex flex-col items-start">
						<p className="font-medium text-center">{author || fullname()}</p>
						<p className="text-center text-green-500 text-sm">
							+{rating || Math.round(Math.random() * 25000 + 1)}
						</p>
					</div>
					<div className="flex gap-1 items-center w-fit h-fit px-2 py-1 border bg-white rounded-xl font-bold ml-auto mr-3">
						<StarFilledIcon />
						{grade}
					</div>
				</div>
				<div>
					<div className="flex gap-2">
						<h2 className="font-bold">
							{title ||
								loremIpsum({
									p: 1,
									avgSentencesPerParagraph: 0,
									avgWordsPerSentence: 8,
									random: true,
									startWithLoremIpsum: false,
								})}
						</h2>
					</div>
					<p className="text text-sm text-pretty">
						{text ||
							loremIpsum({
								p: 2,
								avgSentencesPerParagraph: 2,
								avgWordsPerSentence: 12,
								random: true,
								startWithLoremIpsum: false,
							})}
					</p>
				</div>
			</div>
		</div>
	);
}
