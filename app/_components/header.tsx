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
          <span className="ml-2 text-xl font-semibold text-gray-800 ">
            
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3">

      </div>

      <div className="flex items-center gap-3">
        <Link
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.wechat className="w-6 h-6" />
        </Link>

        {/* <Link
          href="https://www.buymeacoffee.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="bmc-logo.svg" className="w-6 h-6" alt="Buy me a coffee" />
        </Link> */}
      </div>
    </header>
  );
}
