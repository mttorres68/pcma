/*
  Warnings:

  - Added the required column `monitorId` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Turma" ADD COLUMN     "monitorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Monitor" (
    "idMonitor" TEXT NOT NULL,
    "usuariosId" TEXT NOT NULL,

    CONSTRAINT "Monitor_pkey" PRIMARY KEY ("idMonitor")
);

-- AddForeignKey
ALTER TABLE "Monitor" ADD CONSTRAINT "Monitor_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuario"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("idMonitor") ON DELETE RESTRICT ON UPDATE CASCADE;
