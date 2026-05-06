'use client'

import { useEffect, useRef, useState } from 'react'
import { Fullscreen, Pause, Play } from 'lucide-react'

import { cn } from '@/lib/utils'

const THRESHOLD = 0.4 // 40% visível

export function CustomVideo({ src, posterSrc }: { src: string; posterSrc: string }) {
	const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
	const [isPausedManually, setIsPausedManually] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const observer = new IntersectionObserver(
			([entry]) => {
				const isVisible = entry.isIntersecting && entry.intersectionRatio >= THRESHOLD

				if (isVisible) {
					if (shouldLoadVideo) {
						if (!isPausedManually) {
							video.muted = true
							void video.play().catch(() => {})
						}
					} else {
						setShouldLoadVideo(true)
					}
				} else {
					video.pause()
				}
			},
			{
				threshold: THRESHOLD,
			},
		)

		observer.observe(video)

		return () => observer.disconnect()
	}, [isPausedManually, shouldLoadVideo])

	function handlePlayPause() {
		const video = videoRef.current
		if (!video) return

		if (!shouldLoadVideo) {
			setShouldLoadVideo(true)
			return
		}

		if (video.paused) {
			video.muted = true
			void video
				.play()
				.then(() => setIsPausedManually(false))
				.catch(() => {})
		} else {
			video.pause()
			setIsPausedManually(true)
		}
	}

	function handleFullscreen() {
		if (!videoRef.current) return
		videoRef.current.requestFullscreen()
	}

	return (
		<div className="group/video relative">
			<video
				ref={videoRef}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				src={shouldLoadVideo ? src : undefined}
				poster={posterSrc}
				autoPlay={shouldLoadVideo}
				loop
				muted
				playsInline
				preload={shouldLoadVideo ? 'metadata' : 'none'}
				className="w-full aspect-video rounded-md border border-border bg-zinc-700 object-cover"
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
