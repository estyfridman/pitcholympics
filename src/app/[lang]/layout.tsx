import { Locale, i18n } from '@/i18n.config';
import Navbar from '@shared/navbar/Navbar';
import { getHtmlDirection } from '@/utils/getHtmlDirection';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/context/ThemeProvider';
import '@/styles/globals.css';
// import { ClerkProvider } from '@clerk/nextjs';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next.js 13 & i18n Template',
	description: 'Template for Next.js 13 with App Router and i18n',
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	return (
		// <ClerkProvider
		// 	appearance={{
		// 		elements: {
		// 			formButtonPrimary: 'primary-gradient',
		// 			footerActionLink: 'primary-text-gradient hover:text-primary-500',
		// 		},
		// 	}}
		// >
		<html lang={params.lang} dir={getHtmlDirection(params.lang)}>
			<ThemeProvider>
				<body
					className={`${inter.className} bg-light-background-default dark:bg-dark-background-default`}
				>
					<Navbar params={params} />
					{children}
				</body>
			</ThemeProvider>
		</html>
		// </ClerkProvider>
	);
}
