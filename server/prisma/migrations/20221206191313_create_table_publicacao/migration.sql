-- CreateTable
CREATE TABLE "Publicacao" (
    "idPublicacao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dtPublicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "Publicacao_pkey" PRIMARY KEY ("idPublicacao")
);
