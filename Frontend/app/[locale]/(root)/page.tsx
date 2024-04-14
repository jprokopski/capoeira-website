import lightBerimbao from "../../../public/berimbao/light.png"
import darkBerimbao from "../../../public/berimbao/dark.png"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("root")

  return (
    <div className="flex justify-center items-center h-full w-full gap-1">
      <div className="flex flex-col items-center">
        <div className="flex">
          <img
            src={lightBerimbao.src}
            alt="light berimbao"
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 size-[40rem]"
          />
          <img
            src={darkBerimbao.src}
            alt="dark berimbao"
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 size-[40rem]"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">{t("header")}</h1>
          <p className="text-lg mt-4">{t("paragraph")}</p>
        </div>
      </div>
    </div>
  )
}
