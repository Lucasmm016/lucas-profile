'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

interface Props {
	title: string
	children: React.ReactNode
	className?: string
}

export function Container({ title, children, className }: Props) {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className="group relative w-full rounded-md border border-border overflow-hidden">
			<div className="w-full flex items-center gap-2 border-b border-border p-2">
				<div className="flex items-center gap-1">
					<div className="size-3 bg-red-500 rounded-full" />
					<div className="size-3 bg-yellow-500 rounded-full" />
					<div className="size-3 bg-emerald-500 rounded-full" />
				</div>
				<span className="text-xs text-muted-foreground">{title}</span>
			</div>
			<div
				className={cn(
					'w-full min-h-10 p-2 bg-zinc-800 transition-[max-height] duration-(--spring-duration) ease-(--spring-easing)',
					isExpanded ? 'max-h-auto' : 'max-h-96 group-hover:max-h-104',
					className,
				)}
			>
				{children}
			</div>

			{!isExpanded && (
				<div className="absolute bottom-0 left-0 w-full flex justify-center p-0.5 bg-primary/30 backdrop-blur-xs">
					<Button onClick={() => setIsExpanded(true)} size="lg" variant="ghost" className="w-full">
						Ler mais...
					</Button>
				</div>
			)}
		</div>
	)
}
