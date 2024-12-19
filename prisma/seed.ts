import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.account.createMany({
    data: [
      {
        owner: 'John Doe',
        balance: 500,
      },
      {
        owner: 'Jane Doe',
        balance: 1000,
      },
    ],
  });
  console.log('Datos insertados correctamente');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
