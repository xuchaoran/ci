import { Icons } from "@/components/common/icons";
import Link from "next/link";
import Image from "next/image";

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

    </header>
  );
}
