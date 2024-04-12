-- CreateTable
CREATE TABLE `Usuario` (
    `matricula` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_cpf_key`(`cpf`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`matricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioTipo` (
    `id_tipo` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_tipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `id_curso` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_curso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disciplina` (
    `id_disciplina` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_disciplina`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Edital` (
    `idEdital` VARCHAR(191) NOT NULL,
    `vagas` INTEGER NOT NULL,
    `dataInscricao` VARCHAR(191) NOT NULL,
    `descricaoEdital` VARCHAR(191) NOT NULL,
    `cursoSigla` VARCHAR(191) NOT NULL,
    `dataCriacaoEdital` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `disciplinaId` VARCHAR(191) NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `participanteId` VARCHAR(191) NULL,

    UNIQUE INDEX `Edital_disciplinaId_key`(`disciplinaId`),
    PRIMARY KEY (`idEdital`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Particpante` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Particpante_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Monitor` (
    `idMonitor` VARCHAR(191) NOT NULL,
    `usuariosId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idMonitor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `idTurma` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `cursoId` VARCHAR(191) NOT NULL,
    `discplinaId` VARCHAR(191) NOT NULL,
    `monitorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Turma_codigo_key`(`codigo`),
    UNIQUE INDEX `Turma_cursoId_discplinaId_key`(`cursoId`, `discplinaId`),
    PRIMARY KEY (`idTurma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publicacao` (
    `idPublicacao` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `dtPublicao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `turmaId` VARCHAR(191) NULL,

    PRIMARY KEY (`idPublicacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Frequencia` (
    `id` VARCHAR(191) NOT NULL,
    `idFrequencia` VARCHAR(191) NOT NULL,
    `dtRegistro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtFrequencia` VARCHAR(191) NOT NULL,
    `hrInicio` INTEGER NOT NULL,
    `hrFim` INTEGER NOT NULL,
    `ativDesepenhada` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `idAlunos` VARCHAR(191) NOT NULL,
    `turmasId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Aluno_idAlunos_key`(`idAlunos`),
    UNIQUE INDEX `Aluno_idAlunos_turmasId_key`(`idAlunos`, `turmasId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatorio` (
    `usuarioId` VARCHAR(191) NOT NULL,
    `introducao` VARCHAR(191) NOT NULL,
    `desenvolvimento` VARCHAR(191) NOT NULL,
    `conclusao` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    UNIQUE INDEX `Relatorio_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TipoParaUsuario` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TipoParaUsuario_AB_unique`(`A`, `B`),
    INDEX `_TipoParaUsuario_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CursoToDisciplina` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CursoToDisciplina_AB_unique`(`A`, `B`),
    INDEX `_CursoToDisciplina_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CursoToEdital` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CursoToEdital_AB_unique`(`A`, `B`),
    INDEX `_CursoToEdital_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Edital` ADD CONSTRAINT `Edital_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Edital` ADD CONSTRAINT `Edital_disciplinaId_fkey` FOREIGN KEY (`disciplinaId`) REFERENCES `Disciplina`(`id_disciplina`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Edital` ADD CONSTRAINT `Edital_participanteId_fkey` FOREIGN KEY (`participanteId`) REFERENCES `Particpante`(`userId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Particpante` ADD CONSTRAINT `Particpante_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuario`(`matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Monitor` ADD CONSTRAINT `Monitor_usuariosId_fkey` FOREIGN KEY (`usuariosId`) REFERENCES `Usuario`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id_curso`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_discplinaId_fkey` FOREIGN KEY (`discplinaId`) REFERENCES `Disciplina`(`id_disciplina`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_monitorId_fkey` FOREIGN KEY (`monitorId`) REFERENCES `Monitor`(`idMonitor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicacao` ADD CONSTRAINT `Publicacao_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`codigo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Frequencia` ADD CONSTRAINT `Frequencia_idFrequencia_fkey` FOREIGN KEY (`idFrequencia`) REFERENCES `Turma`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_idAlunos_fkey` FOREIGN KEY (`idAlunos`) REFERENCES `Usuario`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_turmasId_fkey` FOREIGN KEY (`turmasId`) REFERENCES `Turma`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TipoParaUsuario` ADD CONSTRAINT `_TipoParaUsuario_A_fkey` FOREIGN KEY (`A`) REFERENCES `Usuario`(`matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TipoParaUsuario` ADD CONSTRAINT `_TipoParaUsuario_B_fkey` FOREIGN KEY (`B`) REFERENCES `UsuarioTipo`(`id_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToDisciplina` ADD CONSTRAINT `_CursoToDisciplina_A_fkey` FOREIGN KEY (`A`) REFERENCES `Curso`(`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToDisciplina` ADD CONSTRAINT `_CursoToDisciplina_B_fkey` FOREIGN KEY (`B`) REFERENCES `Disciplina`(`id_disciplina`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToEdital` ADD CONSTRAINT `_CursoToEdital_A_fkey` FOREIGN KEY (`A`) REFERENCES `Curso`(`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToEdital` ADD CONSTRAINT `_CursoToEdital_B_fkey` FOREIGN KEY (`B`) REFERENCES `Edital`(`idEdital`) ON DELETE CASCADE ON UPDATE CASCADE;
