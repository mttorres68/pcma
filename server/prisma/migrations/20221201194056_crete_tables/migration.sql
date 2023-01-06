-- CreateTable
CREATE TABLE "Curso" (
    "id_curso" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id_disciplina" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id_disciplina")
);

-- CreateTable
CREATE TABLE "Edital" (
    "idEdital" TEXT NOT NULL,
    "vagas" INTEGER NOT NULL,
    "dataInscricao" TEXT NOT NULL,
    "descricaoEdital" TEXT NOT NULL,
    "cursoSigla" TEXT NOT NULL,
    "dataCriacaoEdital" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disciplinaId" TEXT,
    "participanteId" TEXT,

    CONSTRAINT "Edital_pkey" PRIMARY KEY ("idEdital")
);

-- CreateTable
CREATE TABLE "Particpante" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Particpante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CursoParaDisciplina" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CursoToEdital" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Edital_disciplinaId_key" ON "Edital"("disciplinaId");

-- CreateIndex
CREATE UNIQUE INDEX "Particpante_userId_key" ON "Particpante"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_CursoParaDisciplina_AB_unique" ON "_CursoParaDisciplina"("A", "B");

-- CreateIndex
CREATE INDEX "_CursoParaDisciplina_B_index" ON "_CursoParaDisciplina"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CursoToEdital_AB_unique" ON "_CursoToEdital"("A", "B");

-- CreateIndex
CREATE INDEX "_CursoToEdital_B_index" ON "_CursoToEdital"("B");

-- AddForeignKey
ALTER TABLE "Edital" ADD CONSTRAINT "Edital_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id_disciplina") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edital" ADD CONSTRAINT "Edital_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Particpante"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Particpante" ADD CONSTRAINT "Particpante_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("matricula") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoParaDisciplina" ADD CONSTRAINT "_CursoParaDisciplina_A_fkey" FOREIGN KEY ("A") REFERENCES "Curso"("id_curso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoParaDisciplina" ADD CONSTRAINT "_CursoParaDisciplina_B_fkey" FOREIGN KEY ("B") REFERENCES "Disciplina"("id_disciplina") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoToEdital" ADD CONSTRAINT "_CursoToEdital_A_fkey" FOREIGN KEY ("A") REFERENCES "Curso"("id_curso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoToEdital" ADD CONSTRAINT "_CursoToEdital_B_fkey" FOREIGN KEY ("B") REFERENCES "Edital"("idEdital") ON DELETE CASCADE ON UPDATE CASCADE;
