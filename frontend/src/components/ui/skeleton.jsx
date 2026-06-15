"use client";

import React from "react";
import { cn } from "../../utils/cn";

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "rounded-md bg-gray-200 bg-[linear-gradient(90deg,#e5e7eb_25%,#f3f4f6_50%,#e5e7eb_75%),#e5e7eb] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] bg-no-repeat",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
