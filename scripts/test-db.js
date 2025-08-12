const { PrismaClient } = require("../app/generated/prisma");

async function testConnection() {
  const prisma = new PrismaClient();

  try {
    console.log("🔌 Testing Prisma connection to Supabase...");

    // Test basic connection
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("✅ Connection successful!");
    console.log("Query result:", result);

    // Test if we can get database info
    const dbInfo =
      await prisma.$queryRaw`SELECT current_database() as database, current_user as user, version() as version`;
    console.log("📊 Database info:", dbInfo);
  } catch (error) {
    console.error("❌ Connection failed:", error.message);

    if (error.message.includes("P1001")) {
      console.log(
        "💡 This usually means the database URL is incorrect or the database is not accessible"
      );
    } else if (error.message.includes("P1002")) {
      console.log(
        "💡 This usually means the database is not running or the connection is blocked"
      );
    } else if (error.message.includes("P1003")) {
      console.log("💡 This usually means the database does not exist");
    }

    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log("🔌 Disconnected from database");
  }
}

testConnection();
