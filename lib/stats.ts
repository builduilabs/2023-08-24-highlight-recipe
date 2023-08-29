"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

let stats = {
  visitors: 10320,
  customers: 4628,
  orders: 2980,
};

export async function getStats() {
  let statsCookie = cookies().get("stats");

  if (!statsCookie) {
    return stats;
  }

  return JSON.parse(statsCookie.value);
}

export async function refreshVisitors() {
  let stats = await getStats();
  stats.visitors = stats.visitors + getRandomInt(10, 100);

  cookies().set("stats", JSON.stringify(stats));
  // revalidatePath("/");
}

export async function refreshCustomers() {
  let stats = await getStats();
  stats.customers = stats.customers + getRandomInt(10, 100);

  cookies().set("stats", JSON.stringify(stats));

  revalidatePath("/");
}

export async function refreshOrders() {
  let stats = await getStats();
  stats.orders = stats.orders + getRandomInt(10, 100);

  cookies().set("stats", JSON.stringify(stats));

  revalidatePath("/");
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
