import React, { useRef } from "react";

interface Blogs {
	title: string;
	description: string;
	author: string;
	image: string;
	date: string;
	month: string;
	year: string;
}

const blogs: Blogs[] = [
	{
		title: "How I’m Styling Everyday Black Outfits",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands.",
		author: "Mitwa Dadkan",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"More off this less hello salamander lied porpoise much over tightly circa horse taped.",
		author: "Mahws Georgia",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
		author: "Alex Hales",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_8.jpg",
		date: "29",
		month: "Feb",
		year: "2018",
	},
	{
		title: "The Future of Digital Banking",
		description:
			"A look into how digital banking is transforming the financial industry worldwide.",
		author: "Sophia Carter",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_6.jpg",
		date: "10",
		month: "Mar",
		year: "2021",
	},
	{
		title: "Investment Strategies for Beginners",
		description:
			"Understanding the basics of investing and how to build a strong financial portfolio.",
		author: "Michael Lee",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_7.jpg",
		date: "15",
		month: "Jul",
		year: "2020",
	},
	{
		title: "How to Save Money Smartly",
		description:
			"Tips and tricks to help you save more money without compromising on your lifestyle.",
		author: "Emma Watson",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
		date: "22",
		month: "Sep",
		year: "2019",
	},
];

const BlogItem: React.FC<{ blog: Blogs }> = ({ blog }) => {
	const { title, description, author, date, month, year, image } = blog;
	const divRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (divRef.current) {
			const rect = divRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			divRef.current.style.setProperty("--mouse-x", `${x}px`);
			divRef.current.style.setProperty("--mouse-y", `${y}px`);
		}
	};

	return (
		<article
			ref={divRef}
			onMouseMove={handleMouseMove}
			className="rounded-lg bg-[#1a1a1a] text-white shadow-lg h-full flex flex-col p-4 relative overflow-hidden border border-[#222] hover:shadow-[0_4px_20px_rgba(0,229,255,0.3)] transition-shadow duration-300"
		>
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="h-48 w-full object-cover rounded-t-lg"
				/>
				<div className="absolute bottom-2 left-2 text-lg leading-6 px-4 py-2 font-black bg-black opacity-80 rounded-lg">
					{date}
					<br />
					{month}
					<br />
					{year}
				</div>
			</div>
			<div className="flex-grow p-4">
				<p className="font-light text-sm leading-6 mb-2">
					By <a href="#" className="text-blue-400">{author}</a>
				</p>
				<h4 className="font-medium text-xl mb-2">{title}</h4>
				<p className="opacity-60 mb-4">{description}</p>
				<a
					href="#"
					className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
				>
					Read More
				</a>
			</div>
		</article>
	);
};

const Blogs: React.FC = () => {
	return (
		<section className="py-14 md:py-24 text-white overflow-hidden">
			<div className="container px-8 md:px-24">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
						Heal the world with banking blog.
					</h2>
					<p className="text-lg font-medium opacity-80 lg:px-12">
						Banking crises have developed many times throughout history when one or more risks have emerged for a banking sector as a whole.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
					{blogs.map((blog, i) => (
						<div key={i} className="h-full">
							<BlogItem blog={blog} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blogs;
