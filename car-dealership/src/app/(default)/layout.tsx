import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClarityScript from "@/components/ClarityScript";

// Initialize font
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		default: "Ahancha Motors Dealership | Find Your Dream Car",
		template: "%s | Ahancha Motors Dealership - Your Trusted Car Dealer",
	},
	description:
		"Discover your perfect vehicle at our dealership. Browse our extensive inventory of new, used, and certified pre-owned cars, trucks, and SUVs. Get the best deals and financing options available.",
	keywords:
		"car dealership, auto sales, new cars, used cars, car financing, car service",
	openGraph: {
		title: "Ahancha Motors Dealership | Find Your Dream Car",
		description:
			"Discover your perfect vehicle at our dealership. Browse our extensive inventory of new, used, and certified pre-owned cars, trucks, and SUVs.",
		url: "https://motors.ahancha.com/",
		siteName: "Ahancha Motors Dealership",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Ahancha Motors Dealership - Quality Cars at Great Prices",
			},
			{
				url: "/images/cars/featured-car.png",
				width: 1200,
				height: 630,
				alt: "Featured Car at Ahancha Motors",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		"max-snippet": -1,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: "Ahancha Motors Dealership | Find Your Dream Car",
		description:
			"Discover your perfect vehicle at our dealership. Browse our extensive inventory of new, used, and certified pre-owned cars, trucks, and SUVs.",
		creator: "@premiumauto",
		images: ["/images/og-image.jpg"],
	},
};

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body className={`flex flex-col min-h-screen ${inter.className}`}>
				<ClarityScript />
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
