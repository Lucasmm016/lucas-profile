import type { Metadata } from 'next'
import { Geist_Mono, JetBrains_Mono } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/ThemeProvider'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Lucas Matos Developer',
	description: 'Full Stack Developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="pt-BR"
			className={`${jetbrainsMono.variable} ${geistMono.variable} ${jetbrainsMono.className} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col">
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
