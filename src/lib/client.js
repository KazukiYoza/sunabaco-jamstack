import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "kazuki0323",
	apiKey: process.env.API_KEY,
});
