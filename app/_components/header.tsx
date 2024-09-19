
import Link from "next/link";
import Image from "next/image";
import { IconBrandTiktok } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            className="rounded"
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>

      <div className="flex items-center gap-3">
            <Link href="https://v.douyin.com/ikfCwckU" target="_blank">
              <IconBrandTiktok className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
      </div>
    </header>
  );
}
