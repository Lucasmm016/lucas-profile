import { Calendar, Image as ImageIcon } from 'lucide-react'

import { Container } from '@/components/Container'

export function WaveSensor() {
	return (
		<Container title="wave-sensor.md" className="flex flex-col gap-4 text-sm">
			<h1 className="text-lg font-bold">Manutenção Preditiva com IA</h1>
			<div className="flex items-center gap-2 text-muted-foreground">
				<Calendar className="size-4" />
				<h3 className="text-sm">Início em Junho de 2023 - Última atualização em Abril de 2026</h3>
			</div>
			<p>
				Este projeto consiste em uma solução completa de manutenção preditiva para maquinário
				industrial, combinando dispositivos embarcados de baixo consumo, comunicação segura e
				criptografada, processamento em nuvem e análise baseada em Inteligência Artificial e modelo
				de Machine Learning.
			</p>
			<p>
				A arquitetura foi projetada com foco em <b>eficiência energética</b>, <b>escalabilidade</b>{' '}
				e<b>confiabilidade</b> na aquisição e <b>processamento de dados em tempo real</b>.
			</p>
			<div className="w-full aspect-video flex items-center justify-center rounded-md border border-border bg-zinc-700">
				<ImageIcon className="size-8 text-muted-foreground" />
			</div>
			<p>
				O sistema inicia com um dispositivo embarcado microcontrolado com firmware desenvolvido em{' '}
				<b>C/C++</b>, o dispositivo é responsável pela coleta de dados de vibração e temperatura
				diretamente no maquinário.
			</p>
			<p>
				Um segundo dispositivo embarcado microcontrolado com firmware também desenvolvido em{' '}
				<b>C/C++</b>, atuando como gateway entre os dispositivos sensores e a nuvem (servidor),
				recebe os dados via Bluetooth Low Energy 5 e realiza o envio para um servidor em nuvem com
				assinatura HMAC para segurança entre o dispositivo e o servidor.
			</p>
			<p>
				Um servidor em nuvem desenvolvido com <b>Python</b> é responsável por receber todos os dados
				coletados, checar a assinatura HMAC e realizar o processamento dos dados com Inteligência
				Artificial e modelo de Machine Learning salvando os resultados obtidos em um banco de dados.
			</p>
			<p>
				O sistema conta com uma plataforma WEB desenvolvida utilizando <b>Next.js</b>,{' '}
				<b>TypeScript</b>, <b>autenticação com token e refresh token JWT</b>, permitindo que o
				usuário monitore as principais métricas do seu ativo industrial, contando com gráficos de
				espectro de vibração, RMS, RPM, temperatura, entre outras métricas, também possibilitando o
				usuário configurar alertas para métricas específicas e ser notificado via email e WhatsApp
				em tempo real. A plataforma conta com insights gerados pela IA (em conjunto com o modelo de
				Machine Learning) sobre a saúde do ativo industrial, também permitindo o gerenciamento de
				times e setores (sistema multi-tenant).
			</p>
			<p className="font-bold">Características principais:</p>
			<ul className="list-disc list-inside ml-4 space-y-2">
				<li>Aquisição de vibração em 3 eixos (X, Y, Z) com acelerômetro de até 6.6 kHz</li>
				<li>Leitura de temperatura</li>
				<li>Alimentação por bateria com autonomia projetada de até 3 anos</li>
				<li>
					Firmware desenvolvido em C/C++ no ambiente ESP-IDF com sistema de update OTA e
					versionamento de código
				</li>
				<li>
					Arquitetura otimizada para <b>baixo consumo energético</b>,{' '}
					<b>processamento eficiente de sinais</b> e <b>otimização de uso de memória</b>
				</li>
				<li>
					Modelo de Inteligência Artificial e Machine Learning desenvolvido com Python, scikit-learn
					e TensorFlow para detecção de anomalias e previsão de falhas
				</li>
			</ul>
			<p className="font-bold">Processamento local (edge):</p>
			<ul className="list-disc list-inside ml-4 space-y-2">
				<li>Compressão dos dados para redução de payload</li>
				<li>Criptografia AES</li>
				<li>Transmissão de dados via Bluetooth Low Energy 5</li>
			</ul>
		</Container>
	)
}
