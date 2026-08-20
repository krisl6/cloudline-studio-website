/** Mobile-only horizontal scroll-snap track — reverts to the section's normal
 * grid at sm: and up. Pair each child with `carouselItem` plus its own width
 * utility (rich cards ~82-85vw, small pills ~65vw). */
export const carouselTrack =
  "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1 -mx-4 px-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:pb-0 sm:grid"

export const carouselItem = "shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink"
