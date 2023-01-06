-- CreateTable
CREATE TABLE "Aluno" (
    "idAlunos" TEXT NOT NULL,
    "turmasId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_idAlunos_key" ON "Aluno"("idAlunos");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_idAlunos_turmasId_key" ON "Aluno"("idAlunos", "turmasId");
