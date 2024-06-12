"use client";

import * as React from "react";
import * as NavsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Navs = NavsPrimitive.Root;

const NavsList = React.forwardRef<
  React.ElementRef<typeof NavsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavsPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
NavsList.displayName = NavsPrimitive.List.displayName;

const NavsTrigger = React.forwardRef<
  React.ElementRef<typeof NavsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <NavsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
NavsTrigger.displayName = NavsPrimitive.Trigger.displayName;

const NavsContent = React.forwardRef<
  React.ElementRef<typeof NavsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
NavsContent.displayName = NavsPrimitive.Content.displayName;

export { Navs, NavsList, NavsTrigger, NavsContent };
