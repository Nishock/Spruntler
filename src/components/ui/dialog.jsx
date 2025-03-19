"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Dialog = ({ open, onOpenChange, children }) => (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        {children}
    </DialogPrimitive.Root>
);

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
        <DialogPrimitive.Content
            ref={ref}
            className={`fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg z-50 ${className}`}
            {...props}
        >
            {children}
            <DialogPrimitive.Close className="absolute top-3 right-3 text-gray-400 hover:text-gray-200">
                <X className="size-5" />
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
));
DialogContent.displayName = "DialogContent";

export const DialogClose = DialogPrimitive.Close;
