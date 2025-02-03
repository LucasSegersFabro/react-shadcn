import { useQuery } from "@tanstack/react-query";
import { Payment } from "./columns";

const statuses: Payment["status"][] = [
  "pending",
  "processing",
  "success",
  "failed",
];

function getRandomPayment(): Payment {
  return {
    id: crypto.randomUUID(), // Generates a unique ID
    amount: Math.round(Math.random() * 1000 * 100) / 100, // Random amount between 0 and 1000, rounded to 2 decimals
    status: statuses[Math.floor(Math.random() * statuses.length)], // Random status
    email: `user${Math.floor(Math.random() * 1000)}@example.com`, // Random email
  };
}

function generatePayments(n: number): Payment[] {
  return Array.from({ length: n }, getRandomPayment);
}

async function getPayments(): Promise<Payment[]> {
  return generatePayments(1000000);
}

export function usePaymentsTable() {
  return useQuery({ queryKey: ["payments"], queryFn: getPayments });
}
