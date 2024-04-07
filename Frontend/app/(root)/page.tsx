import lightBerimbao from "../../public/berimbao/light.png"
import darkBerimbao from "../../public/berimbao/dark.png"

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <img
        src={lightBerimbao.src}
        alt="light berimbao"
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 w-[100vh]"
      />
      <img
        src={darkBerimbao.src}
        alt="dark berimbao"
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 w-1/3"
      />
    </div>
  )
}
