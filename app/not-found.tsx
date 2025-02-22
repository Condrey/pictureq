import { GlobeIcon } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center gap-4 items-center min-h-[75vh]">
            <div className="flex items-center text-4xl">4<span><GlobeIcon className="animate-spin text-primary "/></span>4<span className="uppercase text-muted-foreground">|Not found</span></div>
            <p className=" text-muted-foreground text-center max-w-sm">Sorry brethren, this page is not available. Check your url, or view other pages.</p>
        </div>
    );
}