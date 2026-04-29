import Link from 'next/link'

import { contact } from '@/utils/contact'

import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import Whatsapp from './icons/Whatsapp'
import { Button } from './ui/button'

export function Header() {
	return (
		<header className="w-full bg-black">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-2 px-2 py-4">
				<Link href="/" className="text-sm">
					<span className="text-primary">~</span>
					/Lucasmm016
				</Link>

				<div className="flex items-center gap-2">
					<Link href={contact.whatsapp} rel="noopener noreferrer" target="_blank">
						<Button size="icon-lg" variant="ghost">
							<Whatsapp className="size-6" />
						</Button>
					</Link>

					<Link href={contact.linkedin} rel="noopener noreferrer" target="_blank">
						<Button size="icon-lg" variant="ghost">
							<Linkedin className="size-6" />
						</Button>
					</Link>

					<Link href={contact.github} rel="noopener noreferrer" target="_blank">
						<Button size="icon-lg" variant="ghost">
							<Github className="size-6" />
						</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}
