import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/assets/images/logo-new2.webp"
        alt={`logo`}
        width={140}
        height={140}
      />
    </div>
  )
}
