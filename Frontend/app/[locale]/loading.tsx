import { cn } from "@/lib/utils"
import { LoaderIcon } from "lucide-react"

export default function Loading({ className }: { className?: string }) {
  return (
    <div className="flex justify-center items-center h-screen w-full gap-1">
      <LoaderIcon className={cn("animate-spin", className)} />
    </div>
  )
}
