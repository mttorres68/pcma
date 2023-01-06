-- CreateTable
CREATE TABLE "Turma" (
    "idTurma" TEXT NOT NULL,
    "cursoId" TEXT NOT NULL,
    "discplinaId" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("idTurma")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turma_cursoId_discplinaId_key" ON "Turma"("cursoId", "discplinaId");

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_discplinaId_fkey" FOREIGN KEY ("discplinaId") REFERENCES "Disciplina"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;
