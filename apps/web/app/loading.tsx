export default function Loading() {
  return (
    <main className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-violet-500/20 border-t-violet-500" />

        <h1 className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          ArkAelius
        </h1>

        <p className="text-sm tracking-[0.35em] text-muted-foreground uppercase">
          Building the Future with AI
        </p>
      </div>
    </main>
  );
}