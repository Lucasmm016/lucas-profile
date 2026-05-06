'use client'

import { useEffect, useRef, useState } from 'react'

type AutoPlayVideoOnVisibilityParams = {
	threshold?: number
}

const DEFAULT_THRESHOLD = 0.4 // 40% visível

export function useAutoPlayVideoOnVisibility({
	threshold = DEFAULT_THRESHOLD,
}: AutoPlayVideoOnVisibilityParams) {
	const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
	const [isPausedManually, setIsPausedManually] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const observer = new IntersectionObserver(
			([entry]) => {
				const isVisible = entry.isIntersecting && entry.intersectionRatio >= threshold

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
				threshold,
			},
		)

		observer.observe(video)

		return () => observer.disconnect()
	}, [isPausedManually, shouldLoadVideo, threshold])

	return { videoRef, setIsPausedManually, shouldLoadVideo, setShouldLoadVideo }
}
