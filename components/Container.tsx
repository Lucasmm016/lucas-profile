interface Props {
	title: string
	children: React.ReactNode
}

export function Container({ title, children }: Props) {
	return (
		<div className="w-full rounded-md border border-border overflow-hidden">
			<div className="w-full flex items-center gap-2 border-b border-border p-2">
				<div className="flex items-center gap-1">
					<div className="size-3 bg-red-500 rounded-full" />
					<div className="size-3 bg-yellow-500 rounded-full" />
					<div className="size-3 bg-emerald-500 rounded-full" />
				</div>
				<span className="text-xs text-muted-foreground">{title}</span>
			</div>
			<div className="w-full p-1 bg-zinc-800">{children}</div>
		</div>
	)
}
