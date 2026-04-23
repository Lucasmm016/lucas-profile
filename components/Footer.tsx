import Link from 'next/link'

import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import { Button } from './ui/button'

export function Footer() {
	return (
		<footer className="w-full border-t border-border">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-between text-center px-2 py-4">
				<span className="text-muted-foreground text-xs">
					© 2026 Lucas Matos - Todos os direitos reservados.
				</span>

				<div className="flex items-center gap-2">
					<Link
						href="https://www.linkedin.com/in/lucas016/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Button size="sm" variant="ghost">
							<Linkedin />
							Linkedin
						</Button>
					</Link>

					<Link href="https://github.com/Lucasmm016" rel="noopener noreferrer" target="_blank">
						<Button size="sm" variant="ghost">
							<Github />
							Github
						</Button>
					</Link>
				</div>
			</div>
		</footer>
	)
}
