-- CreateTable
CREATE TABLE "_TipoParaUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TipoParaUsuario_AB_unique" ON "_TipoParaUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_TipoParaUsuario_B_index" ON "_TipoParaUsuario"("B");

-- AddForeignKey
ALTER TABLE "_TipoParaUsuario" ADD CONSTRAINT "_TipoParaUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Usuario"("matricula") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TipoParaUsuario" ADD CONSTRAINT "_TipoParaUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "UsuarioTipo"("id_tipo") ON DELETE CASCADE ON UPDATE CASCADE;
