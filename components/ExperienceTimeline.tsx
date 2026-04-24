import { Separator } from './ui/separator'

const items = [
	{
		period: 'Novembro de 2024 - Atual',
		title: 'Desenvolvedor Full Stack Node.js',
		subtitle: 'Zapflow Software LTDA, Bahia, Brasil - Remoto',
		description:
			'Responsável pelo desenvolvimento de soluções web de mensageria para empresas oferecendo soluções modernas utilizadas por mais de 1000 clientes e empresas no Brasil, Estados Unidos e Moçambique. Utilização de tecnologias como Node.js, Next.js, TypeScript, infraestrutura em nuvem (AWS), cloud storage (R2), banco de dados Postgres e MongoDB, integração com Meta Cloud API entre outras APIs externas e sistema de filas e workflows com Inngest.',
	},
	{
		period: 'Dezembro de 2021 - Novembro de 2024',
		title: 'Desenvolvedor Full Stack Node.js',
		subtitle: 'Octroz Desenvolvimento de Software, São Paulo, Brasil - Híbrido',
		description:
			'Responsável pelo desenvolvimento de soluções robustas Web e Mobile sob demanda para clientes e empresas no brasileiras. Utilização de tecnologias como Node.js, React, TypeScript, infraestrutura em nuvem (AWS/GCP), cloud storage (S3/R2), banco de dados SQL e NoSQL, integrações com APIs externas, etc. Gestão de times de desenvolvimento e liderança de projetos.',
	},
	{
		period: 'Julho de 2020 - Dezembro de 2021',
		title: 'Desenvolvedor Python',
		subtitle: 'São Paulo, Brasil - Remoto',
		description:
			'Início da minha jornada profissional como desenvolvedor de software atuando como freelancer com desenvolvimento de aplicações Python para automação e RPA, web scraping, análise de dados, scikit-learn e TensorFlow.',
	},
]

export function ExperienceTimeline() {
	return (
		<div className="w-full flex flex-col gap-2 border border-border rounded-md p-2 bg-zinc-950">
			<div className="flex items-center gap-1">
				<span className="text-xs text-primary">$</span>
				<span className="text-xs text-muted-foreground">timeline</span>
			</div>

			<Separator />

			<div className="w-full p-4">
				<ul className="border-l-2 border-primary pl-4 space-y-10 list-none">
					{items.map((item, index) => (
						<li key={index} className="relative flex flex-col gap-4">
							<div className="absolute top-1.5 left-[-1.45rem] size-3 rounded-full border-2 border-primary bg-zinc-950" />

							<div className="flex items-center justify-between gap-4">
								<span className="font-bold">{item.title}</span>
								<span className="text-xs text-primary">{item.period}</span>
							</div>

							{item.subtitle && (
								<span className="text-xs text-muted-foreground">{item.subtitle}</span>
							)}
							<span className="text-xs text-muted-foreground">{item.description}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
