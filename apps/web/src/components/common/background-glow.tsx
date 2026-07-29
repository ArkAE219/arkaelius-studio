export function BackgroundGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-3xl" />
    </div>
  );
}