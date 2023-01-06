-- AddForeignKey
ALTER TABLE "Frequencia" ADD CONSTRAINT "Frequencia_idFrequencia_fkey" FOREIGN KEY ("idFrequencia") REFERENCES "Turma"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
