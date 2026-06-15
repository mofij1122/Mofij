// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center animate-pulse">
          <span className="text-2xl font-bold text-white font-heading">MK</span>
        </div>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}