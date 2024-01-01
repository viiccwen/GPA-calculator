import Link from "next/link";
import { Github } from "lucide-react";
import { CircleUserRound } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="w-screen bg-black text-white py-3 fixed bottom-0">
        <div className="flex justify-center items-center gap-2 text-xs">
          <div>VicWen</div>
          <div>
            <Link href="https://github.com/viiccwen">
              <Github strokeWidth={1.3} />
            </Link>
          </div>
          <div>
            <Link href="https://bento.me/vicwen">
              <CircleUserRound strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
