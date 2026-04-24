import Link from 'next/link'
import { Calendar, ExternalLink, Image as ImageIcon } from 'lucide-react'

import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'

import { StackTable } from './StackTable'

export function ZapflowSaas() {
	return (
		<Container title="zapflow-saas.md" className="flex flex-col gap-4 text-sm">
			<h1 className="text-lg font-bold">Zapflow SaaS</h1>
			<div className="flex items-center gap-2 text-muted-foreground">
				<Calendar className="size-4" />
				<h3 className="text-sm">
					Início em Dezembro de 2025 - Última atualização em Abril de 2026
				</h3>
			</div>
			<Link href="https://app.zapfloww.com.br" rel="noopener noreferrer" target="_blank">
				<Button variant="link" className="p-0">
					<ExternalLink />
					Link para o projeto
				</Button>
			</Link>
			<p>
				Plataforma brasileira de automação de mensageria focado em WhatsApp Business com regra de
				negócios B2B.
			</p>
			<p>
				A ideia central é dar a empresas uma plataforma completa para gerenciar o atendimento via
				WhatsApp — com caixa de entrada de conversas e mensagens em tempo real, automações visuais
				com nodes e fluxos drag-and-drop, CRM estilo Kanban e biblioteca de conteúdo com
				gerenciamento de templates, etiquetas e mensagens rápidas — tudo dentro de um modelo
				multi-tenant onde cada cliente tem sua própria organização com membros, assinatura e saldo
				de créditos.
			</p>
			<div className="w-full aspect-video flex items-center justify-center rounded-md border border-border bg-zinc-700">
				<ImageIcon className="size-8 text-muted-foreground" />
			</div>
			<p className="font-bold">O que a plataforma faz:</p>
			<ul className="list-disc list-inside ml-4 space-y-2">
				<li>
					<b>Chat ao vivo</b> - interface de atendimento conectada ao WhatsApp Business via Meta
					Cloud API, com mensagens em tempo real via Socket.IO
				</li>
				<li>
					<b>Fluxos de automação</b> - o usuário monta visualmente (drag-and-drop com React Flow)
					sequências de mensagens automáticas com delays, textos, mídias e templates HSM que são
					disparadas em uma conversa
				</li>
				<li>
					<b>CRM Kanban</b> - pipeline de atendimento onde conversas são movidas entre colunas
					(similar a um Trello)
				</li>
				<li>
					<b>Biblioteca de conteúdo</b> - mensagens rápidas, templates aprovados pelo Meta e fluxos
					salvos, organizados em pastas
				</li>
				<li>
					<b>Multi-tenant</b> - cada workspace tem seus próprios membros, integrações e dados
					isolados
				</li>
			</ul>
			<div className="flex flex-col gap-2 border border-border rounded-md p-2">
				<h3 className="text-lg text-center font-bold">Stacks utilizadas</h3>
				<StackTable />
			</div>
		</Container>
	)
}
