import Image from "next/image";
import { profile } from "@/data/profile";

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="
          relative

          w-[33%]
          aspect-square

          min-w-[80px]
          max-w-[130px]

          overflow-hidden
          rounded-full

          border-2
          border-violet-500

          p-[2px]

          shadow-[0_0_20px_rgba(168,85,247,0.2)]
        "
      >
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          priority
          sizes="(max-width: 1024px) 120px, 130px"
          className="rounded-full object-cover"
        />
      </div>

      <h1
        className="
          mt-[clamp(.5rem,1vh,1rem)]

          font-bold
          leading-tight

          text-foreground

          text-[clamp(1.2rem,1vw,2.1rem)]

          transition-colors
          duration-300
        "
      >
        {profile.name}
      </h1>

      <p
        className="
          mt-[clamp(.15rem,.5vh,.5rem)]

          font-medium

          text-violet-400

          text-[clamp(.85rem,.9vw,1.05rem)]
        "
      >
        {profile.role}
      </p>

      <p
        className="
          mt-[clamp(.5rem,1vh,1rem)]

          w-[110%]
          max-w-[260px]

          text-muted

          leading-[1.5]

          text-[clamp(.75rem,.8vw,.95rem)]

          transition-colors
          duration-300
        "
      >
        {profile.description}
      </p>
    </div>
  );
}