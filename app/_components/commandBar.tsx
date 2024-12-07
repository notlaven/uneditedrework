"use client";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command';
import React from 'react';

export default function CommandBar() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const navigateTo = (path: string) => {
        window.location.href = path;
      };

    
    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a page to go to"/>
            <CommandList>
                <CommandEmpty>No pages found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem onSelect={() => navigateTo('/experience')}>Experience</CommandItem>
                    <CommandItem onSelect={() => navigateTo('/about')}>About</CommandItem>
                </CommandGroup>
                <CommandSeparator/>
                <CommandGroup heading="Blogs">
                    <CommandItem onSelect={() => navigateTo('/blog')}>Blogs</CommandItem>
                    <CommandItem onSelect={() => navigateTo('/blog/devlog')}>Devlogs</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}