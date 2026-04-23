import Link from 'next/link'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Github from '@/components/icons/Github'
import Linkedin from '@/components/icons/Linkedin'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-900">
			<Header />

			<main className="flex flex-1 w-full flex-col items-center">
				<div className="w-full p-4 bg-linear-to-b from-black from-50% to-zinc-900">
					<section className="w-full max-w-6xl mx-auto flex items-center justify-between gap-2 py-32">
						<div className="flex flex-col gap-5">
							<h3 className="text-primary text-sm">São Paulo, Brasil</h3>
							<h1 className="text-5xl font-extrabold">Lucas Matos</h1>
							<h2>Desenvolvedor Full Stack Node.js</h2>
							<p className="text-muted-foreground max-w-xl">
								<b>7 anos</b> de experiência em <b>Node.js</b>, <b>React</b> e <b>TypeScript</b>,
								atuando em aplicações escaláveis web e mobile, banco de dados SQL e NoSQL,
								infraestrutura em nuvem (AWS), cloud storage (S3/R2) e liderança técnica de
								projetos.
							</p>
							<div className="flex gap-2">
								<Link
									href="https://www.linkedin.com/in/lucas016/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<Button variant="outline">
										<Linkedin />
										Linkedin
									</Button>
								</Link>

								<Link
									href="https://github.com/Lucasmm016"
									rel="noopener noreferrer"
									target="_blank"
								>
									<Button variant="outline">
										<Github />
										GitHub
									</Button>
								</Link>
							</div>
						</div>
						<div>
							<div
								style={{ backgroundImage: "url('/profile.webp')" }}
								className="relative size-96 bg-size-[150%_auto] bg-position-[center_top_-8rem] rounded-md overflow-hidden"
							>
								<div className="absolute w-full h-full bg-linear-to-b from-transparent via-transparent to-black"></div>
							</div>
						</div>
					</section>
				</div>

				<div className="w-full max-w-6xl flex flex-col items-center gap-10 p-4">
					<section className="w-full flex items-center justify-between gap-2">
						<Container title="README.md">
							<p className="text-sm">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
								<br />
								<br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
								<br />
								<br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
							</p>
						</Container>
					</section>

					<section className="w-full flex items-center justify-between gap-2">
						<Container title="README.md">
							<p className="text-sm">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
								<br />
								<br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
								<br />
								<br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
							</p>
						</Container>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	)
}
