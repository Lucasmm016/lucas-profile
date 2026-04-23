import { Header } from '@/components/Header'

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-900">
			<Header />

			<main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between p-4">
				<section className="w-full flex items-center justify-between gap-2">
					<div className="flex flex-col gap-2">
						<h3 className="text-primary text-sm">São Paulo, Brasil</h3>
						<h1 className="text-5xl font-extrabold">Lucas Matos</h1>
						<h2>Desenvolvedor Full Stack React/Next.js (Typescript)</h2>
					</div>
					<div>
						<div
							style={{ backgroundImage: "url('/profile.webp')" }}
							className="relative size-96 bg-size-[130%_auto] bg-position-[center_top_-6rem] rounded-md overflow-hidden"
						>
							<div className="absolute w-full h-full bg-linear-to-b from-transparent via-transparent to-black"></div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
