import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserBadgeProps {
  name: string
  avatarUrl?: string
}

export default function UserBadge({ name, avatarUrl }: UserBadgeProps) {

  const fallback = name.charAt(0) + (name.split(" ").slice(-1)[0]?.charAt(0) ?? "")

  return (
    <div className="flex items-center space-x-2 p-3">
      <Avatar className="size-7">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="">
          {name}
        </span>
      </div>
    </div>
  );
}
