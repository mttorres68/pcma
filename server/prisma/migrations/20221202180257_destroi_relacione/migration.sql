/*
  Warnings:

  - You are about to drop the `_CursoParaDisciplina` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CursoParaDisciplina" DROP CONSTRAINT "_CursoParaDisciplina_A_fkey";

-- DropForeignKey
ALTER TABLE "_CursoParaDisciplina" DROP CONSTRAINT "_CursoParaDisciplina_B_fkey";

-- DropTable
DROP TABLE "_CursoParaDisciplina";

-- CreateTable
CREATE TABLE "_CursoToDisciplina" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CursoToDisciplina_AB_unique" ON "_CursoToDisciplina"("A", "B");

-- CreateIndex
CREATE INDEX "_CursoToDisciplina_B_index" ON "_CursoToDisciplina"("B");

-- AddForeignKey
ALTER TABLE "_CursoToDisciplina" ADD CONSTRAINT "_CursoToDisciplina_A_fkey" FOREIGN KEY ("A") REFERENCES "Curso"("id_curso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoToDisciplina" ADD CONSTRAINT "_CursoToDisciplina_B_fkey" FOREIGN KEY ("B") REFERENCES "Disciplina"("id_disciplina") ON DELETE CASCADE ON UPDATE CASCADE;
