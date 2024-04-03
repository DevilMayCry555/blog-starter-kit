import Link from "next/link";

export default function TopBanner() {
  return (
    <div
      className="flex justify-between  items-center fixed top-0 left-0 right-0  p-4 h-16"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div>
        <Link href="/backdoor" className="text-white">
          控制台
        </Link>
      </div>
      <div>
        <Link href="/logout" className="text-white">
          登出
        </Link>
      </div>
    </div>
  );
}
