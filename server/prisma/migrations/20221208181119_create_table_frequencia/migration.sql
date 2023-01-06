-- CreateTable
CREATE TABLE "Frequencia" (
    "idFrequencia" TEXT NOT NULL,
    "dtRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dtFrequencia" TIMESTAMP(3) NOT NULL,
    "hrInicio" INTEGER NOT NULL,
    "hrFim" INTEGER NOT NULL,
    "ativDesepenhada" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,

    CONSTRAINT "Frequencia_pkey" PRIMARY KEY ("idFrequencia")
);
