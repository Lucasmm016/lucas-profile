'use client'

import { useEffect, useRef } from 'react'
import { Fullscreen } from 'lucide-react'

import { Button } from './ui/button'

export function CustomVideo({ src }: { src: string }) {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.muted = true
					void video.play()
				} else {
					video.pause()
				}
			},
			{
				threshold: 0.3, // 30% visível
			},
		)

		observer.observe(video)

		return () => observer.disconnect()
	}, [])

	function handleClick() {
		if (videoRef.current) {
			videoRef.current.requestFullscreen()
		}
	}

	return (
		<div className="relative">
			<video
				ref={videoRef}
				className="w-full aspect-video rounded-md border border-border bg-zinc-700 object-cover"
				src={src}
				loop
				muted
				playsInline
				preload="metadata"
			/>

			<Button
				onClick={handleClick}
				variant="outline"
				size="icon-lg"
				className="absolute bottom-2 right-2"
			>
				<Fullscreen />
			</Button>
		</div>
	)
}
