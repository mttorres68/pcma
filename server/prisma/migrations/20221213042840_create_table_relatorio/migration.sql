-- CreateTable
CREATE TABLE "Relatorio" (
    "usuarioId" TEXT NOT NULL,
    "introducao" TEXT NOT NULL,
    "desenvolvimento" TEXT NOT NULL,
    "conclusao" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Relatorio_pkey" PRIMARY KEY ("usuarioId")
);
