/*
  Warnings:

  - Added the required column `titulo` to the `Publicacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Publicacao" ADD COLUMN     "titulo" TEXT NOT NULL;
