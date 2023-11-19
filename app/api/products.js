import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  const client = await sql.connect();

  try {
    await client.sql`CREATE TABLE IF NOT EXISTS Brands ( Name varchar(255) );`;
    const names = [
      "Apple",
      "Samsung",
      "Vivo",
      "OPPO",
      "Huawei",
      "Xiaomi",
      "OnePlus",
      "Realme",
    ];
    await client.sql`INSERT INTO Brands (Name) VALUES (${names[0]}, ${names[1]}, ${names[2]}, ${names[3]}, ${names[4]}, ${names[5]}, ${names[6]}, ${names[7]});`;
  } catch (error) {
    return response.status(500).json({ error });
  }

  const pets = await client.sql`SELECT * FROM Brands;`;
  return response.status(200).json({ pets: pets.rows });
}
