import Link from 'next/link'

import { Contact } from '@/components/Contact'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Github from '@/components/icons/Github'
import Linkedin from '@/components/icons/Linkedin'
import Whatsapp from '@/components/icons/Whatsapp'
import { WaveSensor } from '@/components/projects/wave-sensor'
import { WhatsappExtension } from '@/components/projects/whatsapp-extension'
import { WhatsappSaas } from '@/components/projects/whatsapp-saas'
import { Skills } from '@/components/Skills'
import { Button } from '@/components/ui/button'
import { contact } from '@/utils/contact'

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-900">
			<Header />

			<main className="flex flex-1 w-full flex-col items-center">
				<div className="w-full p-4 bg-linear-to-b from-black from-50% to-zinc-900">
					<div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10 lg:py-40">
						<div className="flex flex-col gap-5">
							<h3 className="text-primary text-sm">São Paulo, Brasil</h3>
							<h1 className="text-5xl font-extrabold">Lucas Matos</h1>
							<h2>Desenvolvedor Full Stack Node.js</h2>
							<p className="text-muted-foreground max-w-full lg:max-w-xl">
								<b>6 anos</b> de experiência profissional em <b>Node.js</b>, <b>React</b> e{' '}
								<b>TypeScript</b>, atuando em aplicações escaláveis web e mobile, banco de dados SQL
								e NoSQL, infraestrutura em nuvem (AWS), cloud storage (S3/R2) e liderança técnica de
								projetos.
							</p>
							<div className="flex items-center flex-col md:flex-row gap-2">
								<Link
									href={contact.whatsapp}
									rel="noopener noreferrer"
									target="_blank"
									className="w-full md:w-auto"
								>
									<Button variant="outline" className="w-full">
										<Whatsapp />
										WhatsApp
									</Button>
								</Link>

								<Link
									href={contact.linkedin}
									rel="noopener noreferrer"
									target="_blank"
									className="w-full md:w-auto"
								>
									<Button variant="outline" className="w-full">
										<Linkedin />
										Linkedin
									</Button>
								</Link>

								<Link
									href={contact.github}
									rel="noopener noreferrer"
									target="_blank"
									className="w-full md:w-auto"
								>
									<Button variant="outline" className="w-full">
										<Github />
										GitHub
									</Button>
								</Link>
							</div>
						</div>
						<div className="w-full max-w-72 lg:max-w-96 aspect-square">
							<div
								style={{ backgroundImage: "url('/profile.webp')" }}
								className="relative size-full bg-size-[150%_auto] bg-position-[center_top_-7rem] rounded-md overflow-hidden"
							>
								<div className="absolute w-full h-full bg-linear-to-b from-transparent via-transparent to-black"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full max-w-6xl flex flex-col items-center gap-10 p-4">
					<section className="w-full flex flex-col gap-10">
						<div className="flex flex-col gap-2">
							<h3 className="text-primary text-xl font-bold">Experiências</h3>
							<p className="text-muted-foreground text-sm">
								Timeline das minhas experiências profissionais com desenvolvimento de software
							</p>
						</div>

						<ExperienceTimeline />
					</section>

					<section className="w-full flex flex-col gap-10">
						<div className="flex flex-col gap-2">
							<h3 className="text-primary text-xl font-bold">Portfólio</h3>
							<p className="text-muted-foreground text-sm">
								Conheça alguns dos meus projetos mais recentes
							</p>
						</div>

						<WhatsappSaas />
						<WaveSensor />
						<WhatsappExtension />
					</section>

					<section className="w-full flex flex-col gap-10">
						<div className="flex flex-col gap-2">
							<h3 className="text-primary text-xl font-bold">Tecnologias utilizadas</h3>
							<p className="text-muted-foreground text-sm">
								Conheça as tecnologias que eu utilizo frequentemente
							</p>
						</div>

						<Skills />
					</section>

					<section className="w-full flex flex-col gap-10">
						<div className="flex flex-col gap-2">
							<h3 className="text-primary text-xl font-bold">Contato</h3>
							<p className="text-muted-foreground text-sm">
								Contato profissional para projetos, oportunidades e ideias
							</p>
						</div>

						<div className="flex flex-col gap-4">
							<p className="text-sm">
								Você pode me encontrar nas redes sociais abaixo ou enviar um e-mail para{' '}
								<a href={`mailto:${contact.email}`} className="text-primary underline">
									{contact.email}
								</a>
							</p>

							<Contact />
						</div>
					</section>

					<section className="w-full flex flex-col gap-10">
						<div className="flex flex-col gap-2">
							<h3 className="text-primary text-xl font-bold">Este site</h3>
							<p className="text-sm">
								Este site foi desenvolvido por mim usando <b>Next.js</b>, <b>Tailwind CSS</b>,{' '}
								<b>TypeScript</b> e <b>Shadcn UI</b>. Acesse o UI. Acesse o{' '}
								<a
									href="https://github.com/Lucasmm016/lucas-profile"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary underline"
								>
									repositório no Github
								</a>{' '}
								para ver o código fonte.
							</p>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	)
}
