/*
  Warnings:

  - Added the required column `usuarioId` to the `Edital` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Edital" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Edital" ADD CONSTRAINT "Edital_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;
