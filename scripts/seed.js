const { db } = require('@vercel/postgres');

async function createBseOrderBook(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS "BseOrderBook" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        "createdAt" DateTime @default(now()),
        "updatedAt" DateTime @updatedAt,
        "seqNo" INT NOT NULL,
        isin VARCHAR(255) NOT NULL,
        "scripName" VARCHAR(255) NOT NULL,
        "scripCode" VARCHAR(255) NOT NULL,
        "faceValue" DOUBLE PRECISION,
        "maturityDate" Date,
        "creditRating" VARCHAR(255),
        "close" DOUBLE PRECISION,
        "open" DOUBLE PRECISION,
        "high" DOUBLE PRECISION,
        "low" DOUBLE PRECISION,
        "totalBuyQty" INT,
        "totalSellQty" INT,
        "buyPrice" DOUBLE PRECISION,
        "sellPrice" DOUBLE PRECISION
      );
    `;

    console.log(`Created "bseOrderBook" table`);

    return createTable;
  } catch (error) {
    console.error('Error creating bseOrderBook:', error);
    throw error;
  }
}

async function createNseOrderBook(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS "NseOrderBook" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        "createdAt" DATE NOT NULL,
        "updatedAt" DATE NOT NULL,
        "seqNo" INT NOT NULL,
        isin VARCHAR(255) NOT NULL,
        "scripName" VARCHAR(255) NOT NULL,
        "faceValue" DOUBLE PRECISION,
        "maturityDate" Date,
        "creditRating" VARCHAR(255),
        "close" DOUBLE PRECISION,
        "open" DOUBLE PRECISION,
        "high" DOUBLE PRECISION,
        "low" DOUBLE PRECISION,
        "totalBuyQty" INT,
        "totalSellQty" INT,
        "buyPrice" DOUBLE PRECISION,
        "sellPrice" DOUBLE PRECISION
      );
    `;

    console.log(`Created "bseOrderBook" table`);

    return createTable;
  } catch (error) {
    console.error('Error creating bseOrderBook:', error);
    throw error;
  }
}

async function createOrderBook(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS "orderBook" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        "createdAt" DATE NOT NULL,
        "updatedAt" DATE NOT NULL,
        "exchange" VARCHAR(255) NOT NULL,
        "seqNo" INT NOT NULL,
        isin VARCHAR(255) NOT NULL,
        "scripName" VARCHAR(255) NOT NULL,
        "scripCode" VARCHAR(255) NOT NULL,
        "faceValue" DOUBLE PRECISION,
        "maturityDate" Date,
        "creditRating" VARCHAR(255),
        "close" DOUBLE PRECISION,
        "open" DOUBLE PRECISION,
        "high" DOUBLE PRECISION,
        "low" DOUBLE PRECISION,
        "totalBuyQty" INT,
        "totalSellQty" INT,
        "buyPrice" DOUBLE PRECISION,
        "sellPrice" DOUBLE PRECISION
      );
    `;

    console.log(`Created "orderBook" table`);

    return createTable;
  } catch (error) {
    console.error('Error creating bseOrderBook:', error);
    throw error;
  }
}
async function addColsToIssuance(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  try {
    const alterTable = await client.sql`ALTER TABLE "Issuance"
      ADD COLUMN "nseMaturityDate" Date,
      ADD COLUMN "bseMaturityDate" Date,
      ADD COLUMN "bseCreditRating" VARCHAR(255),
      ADD COLUMN "nseCreditRating" VARCHAR(255),
      ADD COLUMN "bseclose" DOUBLE PRECISION,
      ADD COLUMN "nseclose" DOUBLE PRECISION,
      ADD COLUMN "bseFaceValue" DOUBLE PRECISION,
      ADD COLUMN "nseFaceValue" DOUBLE PRECISION;`;

    console.log(`Added colums to "Issuance" table`);

    return alterTable;
  } catch (error) {
    console.error('Error adding colums to "Issuance" table', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await createBseOrderBook(client);
  // await createNseOrderBook(client);
  // await createOrderBook(client);
  // await addColsToIssuance(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
