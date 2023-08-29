import {
  getStats,
  refreshCustomers,
  refreshOrders,
  refreshVisitors,
} from "@/lib/stats";
import Counter from "./components/counter";
import Highlight from "./components/highlight";

export default async function Home() {
  let { visitors, customers, orders } = await getStats();

  return (
    <div className="mx-auto w-full max-w-4xl gap-2 space-y-6 p-10">
      <div className="grid grid-cols-3 gap-12">
        <div className="space-y-8">
          <form action={refreshVisitors}>
            <button className="rounded bg-white/10 px-4 py-1 text-sm font-semibold text-white shadow-sm transition hover:bg-white/20 active:bg-white/25">
              Refresh
            </button>
          </form>
          <Highlight trigger={visitors} duration={450} className="group">
            <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-sky-500 shadow transition duration-1000 group-data-[highlight]:bg-sky-500 group-data-[highlight]:text-white group-data-[highlight]:duration-[125ms] md:px-4 md:py-5">
              <dt className="truncate text-sm font-medium text-white/50">
                Visitors
              </dt>
              <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
                <Counter value={visitors} />
              </dd>
            </div>
          </Highlight>
        </div>

        <div className="space-y-8">
          <form action={refreshCustomers}>
            <button className="rounded bg-white/10 px-4 py-1 text-sm font-semibold text-white shadow-sm transition hover:bg-white/20 active:bg-white/25">
              Refresh
            </button>
          </form>
          <Highlight trigger={customers} duration={500} className="group">
            <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-rose-500 shadow transition duration-1000 group-data-[highlight]:border-rose-500 group-data-[highlight]:duration-0 md:px-4 md:py-5">
              <dt className="truncate text-sm font-medium text-white/50">
                Customers
              </dt>
              <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
                <Counter value={customers} />
              </dd>
            </div>
          </Highlight>
        </div>

        <div className="space-y-8">
          <form action={refreshOrders}>
            <button className="rounded bg-white/10 px-4 py-1 text-sm font-semibold text-white shadow-sm transition hover:bg-white/20 active:bg-white/25">
              Refresh
            </button>
          </form>
          <Highlight trigger={orders} duration={350} className="group">
            <div className="relative overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-green-500 shadow md:px-4 md:py-5">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="aspect-square h-full animate-[fadeOut_750ms_forwards] rounded-full bg-green-500/50 group-data-[highlight]:animate-[ripple_250ms_cubic-bezier(0.09,.6,.36,1)_forwards]" />
              </div>

              <dt className="truncate text-sm font-medium text-white/50">
                Orders
              </dt>
              <dd className="relative origin-center truncate text-lg font-semibold tabular-nums transition duration-[750ms] group-data-[highlight]:text-white group-data-[highlight]:duration-[250ms] md:mt-2 md:text-xl md:tracking-tight">
                <Counter value={orders} />
              </dd>
            </div>
          </Highlight>
        </div>
      </div>
    </div>
  );
}
