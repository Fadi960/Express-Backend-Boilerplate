// prisma/seed.js
const prisma = require('../src/config/database');

async function main() {
  // Example: create two users
  await prisma.user.create({
    data: {
      id: 'c1f5a7d0-1a2b-3c4d-5e6f-7a8b9c0d1e2f',
      name: 'Alice',
      email: 'alice@example.com',
      password: '$2a$10$…', // pre‑hashed or hash here
    },
  });
  await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      password: '$2a$10$…',
    },
  });

  // add additional seed logic here…
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
