-- DropForeignKey
ALTER TABLE "Particpante" DROP CONSTRAINT "Particpante_userId_fkey";

-- AddForeignKey
ALTER TABLE "Particpante" ADD CONSTRAINT "Particpante_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;
