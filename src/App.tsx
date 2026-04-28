export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        Prestige Worldwide
      </p>
      <h1 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
        Building something nice.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
        v0 of the application shell. Push to{' '}
        <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-zinc-200">
          main
        </code>{' '}
        and the deploy pipeline ships this page to a public URL.
      </p>
    </main>
  );
}
