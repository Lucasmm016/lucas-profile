import Link from 'next/link'

import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import Whatsapp from './icons/Whatsapp'
import { Button } from './ui/button'

export function Contact() {
	return (
		<div className="flex items-center flex-col md:flex-row gap-2">
			<Link
				href="https://wa.me/5515988234382"
				rel="noopener noreferrer"
				target="_blank"
				className="w-full md:w-auto"
			>
				<Button variant="outline" className="w-full">
					<Whatsapp />
					WhatsApp
				</Button>
			</Link>

			<Link
				href="https://www.linkedin.com/in/lucas016/"
				rel="noopener noreferrer"
				target="_blank"
				className="w-full md:w-auto"
			>
				<Button variant="outline" className="w-full">
					<Linkedin />
					Linkedin
				</Button>
			</Link>

			<Link
				href="https://github.com/Lucasmm016"
				rel="noopener noreferrer"
				target="_blank"
				className="w-full md:w-auto"
			>
				<Button variant="outline" className="w-full">
					<Github />
					Github
				</Button>
			</Link>
		</div>
	)
}
