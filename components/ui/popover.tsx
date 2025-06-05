"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

// MONGODB_URL=mongodb+srv://hayotiygaplar24:6AvFlA7wSSfNipXy@comunity.1jpcxaa.mongodb.net/?retryWrites=true&w=majority&appName=Comunity
// NEXT_PUBLIC_GITHUB_CLIENT_ID=Ov23lifhRwBZG09EgIV0
// GITHUB_CLIENT_SECRET=271e15f7e852fa18be0e19d2d38f56af10461923
// GOOGLE_CLIENT_ID=1039786985034-aqpo0g5oe04i43mrbm5u08evvrajjf1b.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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
// JWT_SECRET=32423748923$2379483048029849283094820
// NEXT_SECRET=598459433459083405830453
