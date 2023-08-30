"use server";

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

let options = {
  sameSite: "none",
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
  httpOnly: true,
  secure: true,
} as const;

export async function refreshVisitors() {
  let stats = await getStats();
  stats.visitors = stats.visitors + getRandomInt(10, 100);

  cookies().set("stats", JSON.stringify(stats), options);
}

export async function refreshCustomers() {
  let stats = await getStats();
  stats.customers = stats.customers + getRandomInt(10, 100);

  cookies().set("stats", JSON.stringify(stats), options);
}

export async function refreshOrders() {
  let stats = await getStats();
  stats.orders = stats.orders + getRandomInt(10, 100);

  cookies().set("stats", JSON.stringify(stats), options);
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
