-- AlterTable
ALTER TABLE "Publicacao" ALTER COLUMN "turmaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Publicacao" ADD CONSTRAINT "Publicacao_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("codigo") ON DELETE SET NULL ON UPDATE CASCADE;
