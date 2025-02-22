'use client'

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function ModeToggle() {
    const {setTheme,theme} = useTheme()
    return (
        <Button size={'icon'} variant={'outline'} onClick={()=>setTheme(theme==='light'?'dark':'light')}>
            {theme==='light'?
            <MoonIcon className="size-4"/>
        :<SunIcon className="size-4"/>}
        </Button>
    );
}

export function InlineModeToggle(){
    const {theme,setTheme} = useTheme()
    return(
        <ToggleGroup onValueChange={value=>setTheme(value)} defaultValue={theme} type="single" size={'sm'}
        className="border *:rounded-full border-foreground gap-0 w-fit rounded-full overflow-clip  p-0">
            <ToggleGroupItem  value="system" aria-label="Toggle system mode">
                <MonitorIcon className="size-2.5"/>
            </ToggleGroupItem>
            <ToggleGroupItem value="light" aria-label="Toggle light mode">
                <SunIcon className="size-3"/>
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Toggle dark mode">
                <MoonIcon className="size-3"/>
            </ToggleGroupItem>
        </ToggleGroup>
    )
}