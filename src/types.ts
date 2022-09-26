import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type Method = "GET" | "POST" | "PUT" | "DELETE"
