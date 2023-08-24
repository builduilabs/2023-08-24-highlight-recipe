import { getStats, refreshCustomers, refreshStats } from "@/lib/stats";
import Counter from "./components/counter";
import Highlight from "./components/highlight";

export default async function Home() {
  let { visitors, customers, orders } = await getStats();

  return (
    <div className="mb-20 p-20">
      <div className="flex gap-2">
        <form action={refreshStats}>
          <button className="rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            Refresh stats
          </button>
        </form>

        <form action={refreshCustomers}>
          <button className="rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            Refresh customers
          </button>
        </form>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-12">
        <Highlight trigger={visitors} duration={450} className="group">
          <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-sky-500 shadow transition duration-1000 group-data-[state=on]:bg-sky-500 group-data-[state=on]:text-white group-data-[state=on]:duration-[100ms] md:px-4 md:py-5">
            <dt className="truncate text-sm font-medium text-white/50">
              Visitors
            </dt>
            <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
              <Counter value={visitors} />
            </dd>
          </div>
        </Highlight>

        <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-sky-500 shadow transition duration-1000 group-data-[state=on]:bg-sky-500 group-data-[state=on]:text-white group-data-[state=on]:duration-75 md:px-4 md:py-5">
          <dt className="truncate text-sm font-medium text-white/50">
            Customers
          </dt>
          <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
            {customers.toLocaleString()}
          </dd>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-sky-500 shadow transition duration-1000 group-data-[state=on]:bg-sky-500 group-data-[state=on]:text-white group-data-[state=on]:duration-75 md:px-4 md:py-5">
          <dt className="truncate text-sm font-medium text-white/50">Orders</dt>
          <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
            {orders.toLocaleString()}
          </dd>
        </div>
      </div>
    </div>
  );
}
