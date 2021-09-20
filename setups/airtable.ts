import Airtable from "airtable";

console.log(process.env);

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(
  process.env.NEXT_PUBLIC_DEVISSH_BASE
);

export default base;