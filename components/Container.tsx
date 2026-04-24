'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	title: string
	children: React.ReactNode
	className?: string
}

export function Container({ title, children, className }: Props) {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div
			onClick={() => setIsExpanded(true)}
			className={cn(
				'group relative w-full rounded-md border border-border overflow-hidden',
				isExpanded ? 'cursor-default' : 'cursor-pointer',
			)}
		>
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
					'relative w-full min-h-10 p-2 bg-zinc-800 transition-[max-height] duration-(--spring-duration) ease-(--spring-easing)',
					isExpanded ? 'max-h-auto' : 'max-h-96 group-hover:max-h-104',
					className,
				)}
			>
				{!isExpanded && (
					<div className="absolute inset-0 bg-black/10 pointer-events-none duration-300 opacity-0 group-hover:opacity-100" />
				)}
				{children}
			</div>

			{!isExpanded && (
				<div className="absolute bottom-0 left-0 w-full flex justify-center p-2 bg-primary/30 backdrop-blur-xs">
					<span className="text-sm">Ler mais...</span>
				</div>
			)}
		</div>
	)
}
