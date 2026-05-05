import Link from 'next/link'
import { Calendar, ExternalLink } from 'lucide-react'

import { Container } from '@/components/Container'
import { CustomVideo } from '@/components/CustomVideo'
import { Button } from '@/components/ui/button'

export function WhatsappExtension() {
	return (
		<Container title="whatsapp-extension.md" className="flex flex-col gap-4 text-sm">
			<h1 className="text-lg font-bold">Extensão WhatsApp Web Chrome MV3</h1>
			<div className="flex items-center gap-2 text-muted-foreground">
				<Calendar className="size-4" />
				<h3 className="text-sm">
					Início em Novembro de 2024 - Última atualização em Março de 2026
				</h3>
			</div>
			<Link
				href="https://chromewebstore.google.com/detail/zapflow/kdopglodfjpaeppofgeninffjojlcgck?hl=pt-BR"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Button variant="link" className="p-0">
					<ExternalLink />
					Link para a extensão
				</Button>
			</Link>
			<p>
				Extensão Chrome MV3 para automatizar o atendimento de mensagens no WhatsApp Web com mais de
				300 usuários.
			</p>
			<p>
				Funciona como ferramenta de automação para o WhatsApp Web, onde toda a interface é injetada
				diretamente no site do WhatsApp como um overlay, com um menu lateral e abas para configurar
				automações.
			</p>

			<CustomVideo src="/projects/whatsapp-extension.mp4" />

			<p className="font-bold">O que ela permite fazer:</p>
			<ul className="list-disc list-inside ml-4 space-y-2">
				<li>
					Criar <b>scripts</b> de envio com sequências de mensagens (texto, áudio, imagem, vídeo,
					documento, sticker, contato)
				</li>
				<li>Agendar mensagens para datas e horários específicos</li>
				<li>
					Fazer <b>disparos em massa</b> para listas de contatos
				</li>
				<li>
					Configurar <b>follow-ups</b> automáticos para contatos que não responderam
				</li>
				<li>
					Criar <b>gatilhos</b> que reagem automaticamente a mensagens recebidas
				</li>
				<li>Gerenciar etiquetas e fluxos de atendimento</li>
				<li>
					Integrar com <b>webhooks</b> externos
				</li>
			</ul>
			<p className="font-bold">Como foi construída:</p>
			<p>
				A extensão usa <b>React + TypeScript</b> para a interface e <b>Webpack</b> para o build. A
				estilização é feita com Tailwind CSS. A comunicação com o WhatsApp é feita pela biblioteca
				da <b>wppconnect</b>, que roda dentro do próprio contexto da página do WhatsApp.
			</p>
			<p>
				Os dados do usuário (scripts, agendamentos etc.) ficam salvos localmente no navegador usando
				<b>IndexedDB via Dexie</b>. A autenticação é feita contra uma API REST própria, com tokens
				JWT guardados no storage da extensão.
			</p>
			<p>
				A extensão tem três partes que se comunicam entre si: o <b>service worker</b> (cuida da
				autenticação e chamadas de rede), o <b>content script</b> isolado (roda o React e a UI) e o{' '}
				<b>content script no mundo MAIN</b> (faz a automação real do WhatsApp via wa-js).
			</p>
			<p>
				No build da extensão utilizando <b>Webpack</b>, foi desenvolvido um plugin customizado que
				percorre todos os arquivos e diretórios gerados pelo build renomeando cada um com strings
				aleatórias e reescrevendo referências no manifest.json, técnica utilizada para ofuscação e
				para dificultar engenharia reversa do código publicado na Chrome Web Store.
			</p>
		</Container>
	)
}
