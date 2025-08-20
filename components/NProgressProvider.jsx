"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

export default function NProgressProvider({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        NProgress.start()
        // small delay avoids flicker
        const timer = setTimeout(() => {
            NProgress.done()
        }, 10)

        return () => {
            clearTimeout(timer)
        }
    }, [pathname])

    return <>{children}</>
}
