import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/modals/theme-modal";

export default function Home() {
    return (
        <div>
            <ModeToggle />
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}