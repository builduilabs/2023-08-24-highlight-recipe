export default function Home() {
  return (
    <div className="mx-auto w-full max-w-xs gap-2 space-y-6 sm:max-w-4xl">
      <div className="grid gap-10 sm:grid-cols-3 sm:gap-4">
        <div className="space-y-4">
          <div>
            <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 px-3 py-5 text-sky-500 shadow transition duration-1000 group-data-[highlight=on]:bg-sky-500 group-data-[highlight=on]:text-white group-data-[highlight=on]:duration-[200ms] md:px-4">
              <dt className="truncate text-sm font-medium text-white/50">
                Visitors
              </dt>
              <dd className="relative mt-1 origin-center truncate text-lg font-semibold tabular-nums md:tracking-tight">
                1234
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
