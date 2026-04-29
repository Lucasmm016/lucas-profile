import { Terminal } from 'lucide-react'

import { Badge } from './ui/badge'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from './ui/card'

const data = [
	{
		title: 'Backend / Linguagens',
		items: ['Node.js', 'TypeScript', 'JavaScript', 'Python', 'C', 'C++'],
	},
	{
		title: 'API & Dados',
		items: ['REST APIs', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'GraphQL'],
	},
	{
		title: 'Frameworks & Web',
		items: ['React', 'Next.js', 'NestJS', 'Fastify', 'Tailwind CSS'],
	},
	{
		title: 'Infraestrutura & DevOps',
		items: ['AWS', 'Google Cloud', 'Docker', 'Nginx', 'Git', 'CI/CD'],
	},
]

export function Skills() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{data.map((skill, index) => (
				<Card key={index}>
					<CardHeader>
						<CardTitle>{skill.title}</CardTitle>
						<CardAction>
							<Terminal className="size-4 text-primary" />
						</CardAction>
					</CardHeader>
					<CardContent>
						<div className="flex items-center flex-wrap gap-2">
							{skill.items.map((item, itemIndex) => (
								<Badge key={itemIndex} variant="secondary">
									{item}
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
