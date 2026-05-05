'use client'

import { useEffect, useRef, useState } from 'react'
import { Fullscreen, Pause, Play } from 'lucide-react'

import { cn } from '@/lib/utils'

export function CustomVideo({ src }: { src: string }) {
	const [isPlaying, setIsPlaying] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.muted = true
					video.play()
					setIsPlaying(true)
				} else {
					video.pause()
					setIsPlaying(false)
				}
			},
			{
				threshold: 0.3, // 30% visível
			},
		)

		observer.observe(video)

		return () => observer.disconnect()
	}, [])

	function handlePlayPause() {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play()
				setIsPlaying(true)
			} else {
				videoRef.current.pause()
				setIsPlaying(false)
			}
		}
	}

	function handleFullscreen() {
		if (videoRef.current) {
			videoRef.current.requestFullscreen()
		}
	}

	return (
		<div className="group/video relative">
			<video
				ref={videoRef}
				className="w-full aspect-video rounded-md border border-border bg-zinc-700 object-cover"
				src={src}
				loop
				muted
				playsInline
				preload="metadata"
			/>

			<div
				onClick={handlePlayPause}
				className={cn(
					'absolute inset-0 flex items-center justify-center duration-300',
					isPlaying ? 'opacity-0 group-hover/video:opacity-100' : 'opacity-100',
				)}
			>
				<div className="relative size-20 flex items-center justify-center rounded-full bg-black/30 border border-border transition-all">
					<Play
						className={cn('absolute fill-current transition-all', isPlaying ? 'size-0' : 'size-10')}
					/>
					<Pause
						className={cn('absolute fill-current transition-all', isPlaying ? 'size-10' : 'size-0')}
					/>
				</div>
			</div>

			<div
				onClick={handleFullscreen}
				className="absolute bottom-2 right-2 rounded-lg p-2 bg-black/30 border border-border hover:bg-muted transition-all"
			>
				<Fullscreen className="size-4" />
			</div>
		</div>
	)
}
