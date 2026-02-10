import { Github, CircleUserRound } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-screen bg-black text-white py-3 fixed bottom-0">
      <div className="flex justify-center items-center gap-2 text-xs">
        <div>VicWen</div>
        <div>
          <a
            href="https://github.com/viiccwen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github strokeWidth={1.3} />
          </a>
        </div>
        <div>
          <a
            href="https://bento.me/vicwen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bento"
          >
            <CircleUserRound strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}
