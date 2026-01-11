"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

interface PartnershipCarouselProps {
    brands: string[]
}

const PartnershipCarousel: React.FC<PartnershipCarouselProps> = ({ brands }) => {
    const [items, setItems] = useState<string[]>([])

    useEffect(() => {
        const fallback = [
            "/aelp.webp",
            "/asea.webp",
            "/cbk.webp",
            "/cdsc.webp",
            "/kra.webp",
            "/nse.webp",
            "/papss.webp",
            "/reits.webp",
            "/voveid.webp",
        ]

        const source = brands.length ? brands : fallback
        setItems([...source, ...source])
    }, [brands])

    if (!items.length) return null

    return (
        <div className="relative w-full overflow-hidden py-8">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white dark:from-gray-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white dark:from-gray-950 to-transparent z-10" />

            <div className="flex gap-10 animate-partner-scroll">
                {items.map((src, index) => (
                    <div
                        key={index}
                        className="
              flex-none
              h-20 w-40 sm:h-24 sm:w-44 md:h-28 md:w-48
              rounded-xl
              bg-white/80 dark:bg-gray-900/60
              border border-gray-200/60 dark:border-gray-800
              backdrop-blur
              flex items-center justify-center
              transition
              hover:-translate-y-1 hover:shadow-lg
            "
                    >
                        <Image
                            src={src}
                            alt={`Partner ${index + 1}`}
                            width={200}
                            height={100}
                            className="
                object-contain
                max-h-[70%] max-w-[70%]
              "
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function SlideShow() {
    const brandLogos = [
        "/aelp.webp",
        "/asea.webp",
        "/cbk.webp",
        "/cdsc.webp",
        "/kra.webp",
        "/nse.webp",
        "/papss.webp",
        "/reits.webp",
        "/voveid.webp",
    ]

    return (
        <section className="w-full px-4 py-8">
            <div className="max-w-7xl mx-auto text-center">
                <PartnershipCarousel brands={brandLogos} />
            </div>
        </section>
    )
}
