import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const productsName = ["Callix para vendas", "Callix para escritório", "Callix para atendimento"]

async function main() {
  await prisma.user.create({
    data: {
      name: "Luan Felipe",
      email: "luan@callix.com.br",
      password: "password"
    }
  });

  productsName.forEach(async name => {
    await prisma.product.create({
      data: {
        name
      }
    })
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
