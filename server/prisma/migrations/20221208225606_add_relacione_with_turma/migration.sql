-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idAlunos_fkey" FOREIGN KEY ("idAlunos") REFERENCES "Usuario"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_turmasId_fkey" FOREIGN KEY ("turmasId") REFERENCES "Turma"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
