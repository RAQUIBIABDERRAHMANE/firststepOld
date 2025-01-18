'use client'
import { SignUp } from '@clerk/nextjs';
export default function Home() {
    return (
        <div className="flex justify-center items-center">
            <SignUp forceRedirectUrl={'/'} />
        </div>
    );
}