/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Turma` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Turma" ADD COLUMN     "codigo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Turma_codigo_key" ON "Turma"("codigo");
