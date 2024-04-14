import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: ["pl", "br", "en"],
  defaultLocale: "pl",
  localePrefix: "never",
})

export const config = {
  matcher: ["/", "/(pl|br|en)/:path*"],
}
