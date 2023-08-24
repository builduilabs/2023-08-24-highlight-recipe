"use server";

import { revalidatePath } from "next/cache";

let stats = {
  visitors: 10320,
  customers: 4628,
  orders: 2980,
};

export async function getStats() {
  return stats;
}

export async function refreshStats() {
  stats.visitors = stats.visitors + getRandomInt(10, 100);
  // stats.customers = stats.customers + getRandomInt(1, 100);

  revalidatePath("/");
}

export async function refreshCustomers() {
  // stats.visitors = stats.visitors + getRandomInt(10, 100);
  stats.customers = stats.customers + getRandomInt(1, 100);

  revalidatePath("/");
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
