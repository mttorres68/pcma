-- AddForeignKey
ALTER TABLE "Relatorio" ADD CONSTRAINT "Relatorio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;
