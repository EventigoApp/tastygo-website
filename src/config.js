// Where the TastyGo app runs. Override at build time: VITE_APP_URL=https://app.tastygo.hu
export const APP_URL = (import.meta.env.VITE_APP_URL || 'https://app.tastygo.hu').replace(/\/$/, '')
export const DEMO_URL = import.meta.env.VITE_DEMO_URL || 'https://makos-bistro.tastygo.hu'
export const CONTACT_EMAIL = 'info@tastygo.hu'
export const appLink = path => `${APP_URL}${path}`
