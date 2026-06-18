"use client"

import { useState, useRef } from "react"
import { Music2, Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AudioPlayerProps {
  src: string
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      el.volume = 0.25
      el.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const el = audioRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} loop preload="none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-1.5"
      >
        {/* Play/pause pill */}
        <button
          onClick={toggle}
          className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-2 text-xs font-medium shadow-md backdrop-blur-sm transition-all hover:shadow-lg"
          aria-label={playing ? "Pause background music" : "Play background music"}
        >
          <span className="relative flex size-4 items-center justify-center">
            <Music2 className={`size-3.5 transition-colors ${playing ? "text-primary" : "text-muted-foreground"}`} />
            {playing && (
              <motion.span
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            )}
          </span>
          <span className="text-muted-foreground">{playing ? "Now playing" : "Ambient"}</span>
        </button>

        {/* Mute toggle — only visible when playing */}
        <AnimatePresence>
          {playing && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={toggleMute}
              className="flex size-8 items-center justify-center rounded-full border border-border bg-background/90 shadow-md backdrop-blur-sm transition-all hover:shadow-lg"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted
                ? <VolumeX className="size-3.5 text-muted-foreground" />
                : <Volume2 className="size-3.5 text-primary" />
              }
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
