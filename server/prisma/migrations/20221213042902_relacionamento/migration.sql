-- AddForeignKey
ALTER TABLE "Relatorio" ADD CONSTRAINT "Relatorio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Monitor"("idMonitor") ON DELETE RESTRICT ON UPDATE CASCADE;
