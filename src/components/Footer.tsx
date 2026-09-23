import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0A0D14] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-tight text-white mb-2 block">
            Vamsi Kota
          </Link>
          <p className="text-sm text-slate-500">
            AI Full-Stack Software Engineer & Solutions Architect.
          </p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#1E293B]/50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} Vamsi Krishna Reddy Kota. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
