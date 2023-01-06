/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Relatorio` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Relatorio_usuarioId_key" ON "Relatorio"("usuarioId");
