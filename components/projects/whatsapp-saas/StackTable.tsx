import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

const items = [
	{
		layer: 'Framework',
		technologies: 'Next.js 16 (App Router)',
	},
	{
		layer: 'Linguagem',
		technologies: 'TypeScript',
	},
	{
		layer: 'Runtime',
		technologies: 'React 19',
	},
	{
		layer: 'Database',
		technologies: 'MongoDB via Prisma 6',
	},
	{
		layer: 'Autenticação',
		technologies: 'Better Auth',
	},
	{
		layer: 'Cloud Storage',
		technologies: 'R2 Cloudflare',
	},
	{
		layer: 'Pagamentos',
		technologies: 'Stripe',
	},
	{
		layer: 'Integração',
		technologies: 'Meta WhatsApp Business Cloud API',
	},
	{
		layer: 'Filas / Workflows',
		technologies: 'Inngest',
	},
	{
		layer: 'Realtime',
		technologies: 'Socket.io',
	},
	{
		layer: 'Editor de Fluxos',
		technologies: 'React Flow v12',
	},
	{
		layer: 'Estilização',
		technologies: 'Tailwind CSS 4 + shadcn/ui (Radix UI)',
	},
	{
		layer: 'Formulários',
		technologies: 'React Hook Form 7 + Zod 4',
	},
	{
		layer: 'Fetching / Cache',
		technologies: 'TanStack React Query 5',
	},
	{
		layer: 'Emails',
		technologies: 'Resend + React Email',
	},
	{
		layer: 'Hash de senhas',
		technologies: 'Argon2',
	},
	{
		layer: 'Client HTTP',
		technologies: 'Axios',
	},
]

export function StackTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow className="text-sm bg-card">
					<TableHead>Camada</TableHead>
					<TableHead className="text-right">Tecnologias</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((stack, index) => (
					<TableRow key={index} className="text-sm even:bg-card">
						<TableCell>{stack.layer}</TableCell>
						<TableCell className="text-right">{stack.technologies}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
