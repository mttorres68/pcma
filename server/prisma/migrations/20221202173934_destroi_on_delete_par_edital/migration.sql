-- DropForeignKey
ALTER TABLE "Edital" DROP CONSTRAINT "Edital_participanteId_fkey";

-- AddForeignKey
ALTER TABLE "Edital" ADD CONSTRAINT "Edital_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Particpante"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
