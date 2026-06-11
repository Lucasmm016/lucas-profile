import Image from 'next/image'
import { Calendar } from 'lucide-react'

import { Container } from '@/components/Container'

export function WaveSensor() {
	return (
		<Container title="wave-sensor.md" className="flex flex-col gap-4 text-sm">
			<h1 className="text-lg font-bold">Análise de vibração com IA</h1>
			<div className="flex items-center gap-2 text-muted-foreground">
				<Calendar className="size-4" />
				<h3 className="text-sm">Início em Junho de 2023 - Última atualização em Junho de 2026</h3>
			</div>
			<p>
				Este projeto consiste em uma solução completa de análise de vibração e manutenção preditiva
				para maquinário industrial, combinando microcontrolados embarcados de baixo consumo
				energético, comunicação segura e criptografada, conectividade Bluetooth LE 5, processamento
				de dados em nuvem e análise baseada em Inteligência Artificial e modelo de Machine Learning.
			</p>
			<p>
				A arquitetura foi projetada com foco em <b>eficiência energética</b>,{' '}
				<b>production-ready</b> e <b>confiabilidade</b> na aquisição e processamento de dados{' '}
				<b>em tempo real</b>.
			</p>

			<div className="w-full block md:hidden p-4 rounded-md border border-border bg-zinc-700">
				<Image
					src="/projects/wave-sensor-mobile.png"
					alt="Wave Sensor - Mobile"
					width={1080}
					height={1920}
					className="w-full max-w-md mx-auto rounded-md shadow-xl shadow-black/50"
				/>
			</div>

			<div className="w-full aspect-video hidden md:flex items-center justify-center p-4 rounded-md border border-border bg-zinc-700">
				<Image
					src="/projects/wave-sensor.png"
					alt="Wave Sensor"
					width={1920}
					height={1080}
					className="rounded-md shadow-xl shadow-black/50"
				/>
			</div>

			<p>
				O sistema inicia com um dispositivo embarcado microcontrolado com firmware desenvolvido em{' '}
				<b>C/C++</b>, o dispositivo é responsável pela coleta de dados de vibração e temperatura
				diretamente no ativo industrial.
			</p>
			<p>
				Um segundo dispositivo embarcado microcontrolado com firmware também desenvolvido em{' '}
				<b>C/C++</b>, atuando como gateway entre os dispositivos sensores e a nuvem (servidor),
				recebe os dados via Bluetooth Low Energy 5 e realiza o envio para um servidor em nuvem com
				assinatura HMAC para segurança entre o dispositivo e o servidor.
			</p>
			<p>
				Um servidor em nuvem desenvolvido com <b>Python</b> é responsável por receber todos os dados
				do dispositivo gateway, checar a assinatura HMAC e realizar o processamento dos dados com{' '}
				<b>Inteligência Artificial</b> e <b>modelo de Machine Learning</b> salvando os resultados
				obtidos em um banco de dados.
			</p>
			<p>
				O sistema conta com uma <b>plataforma Web PWA</b> desenvolvida utilizando <b>Next.js</b>,{' '}
				<b>TypeScript</b>, <b>autenticação com token e refresh token JWT</b>, permitindo que o
				usuário monitore as principais métricas do seu ativo industrial, contando com gráficos de
				espectro de vibração, RMS, RPM e temperatura, também possibilitando o usuário configurar{' '}
				<b>alertas</b> para métricas específicas e ser notificado via <b>email</b> e <b>WhatsApp</b>{' '}
				em tempo real. A plataforma conta com <b>insights</b> gerados pela IA (em conjunto com o
				modelo de Machine Learning) sobre a saúde do ativo industrial, também permitindo o
				gerenciamento de times e setores (sistema multi-tenant).
			</p>
			<p className="font-bold">Características principais:</p>
			<ul className="list-disc list-inside ml-4 space-y-2">
				<li>Aquisição de vibração em 3 eixos (X, Y, Z) com acelerômetro de até 6.6 kHz</li>
				<li>Leitura de temperatura</li>
				<li>Alimentação por bateria com autonomia projetada de até 3 anos</li>
				<li>
					Firmware desenvolvido em <b>C/C++</b> no ambiente ESP-IDF, nRF Connect (Nordic) e
					Simplicity Studio (Silicon Labs) com sistema de update OTA e versionamento de código
				</li>
				<li>
					Arquitetura otimizada para <b>baixo consumo energético</b>,{' '}
					<b>processamento eficiente de sinais</b> e <b>otimização de uso de memória</b>
				</li>
				<li>
					Modelo de Inteligência Artificial e Machine Learning desenvolvido com Python, scikit-learn
					e TensorFlow para <b>detecção de anomalias</b> e previsão de falhas
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
