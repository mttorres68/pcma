import { PrismaClient } from '@prisma/client'
import express, { application, response } from 'express';
import cors from 'cors'
import { gerarCodigo } from './gerarCodigo';
import { convertDate } from './converDate';
import { convertHrMinu } from './convertHrMinu';
import { convertMinuHr } from './convertMinuHr';


const app = express()
app.use(express.json())

const App = app.use(cors())

const prisma = new PrismaClient({
    // log:["query"]
})

/**
    *!BUSCA TIPO DO USUÁRIO
    *?OK
*/
App.get('/Tipousuario', async(reques, response) =>{

    const tipoUsuario = await prisma.usuarioTipo.findMany({})
    return response.status(200).json(tipoUsuario);
})
//-------------------------//-------------------------//
/**
    *!CRIAR USUARIO    
    *?OK
*/
App.post('/usuario/:id', async(request, response) => {
    const idTipo:any = request.params.id;
    const body: any = request.body;
    
    if(body == ''){
        console.log(body);
        
    }else{
        console.log('erro');
        
    }
    try {
        
        const matricula = await prisma.usuario.findUnique({
            where:{
                matricula: body.matricula,
            }
        })
        const cpf = await prisma.usuario.findUnique({
            where:{
                cpf: body.cpf,
            }
        })
        const email = await prisma.usuario.findUnique({
            where:{
                email: body.email,
            }
        })

        // VERIFICANDO EXISTENCIA
        if(matricula){
            if(cpf){
                console.log(body.cpf);
                if(email){
                    console.log(body.email);
                    return response
                        .status(402)
                        .json({message:`Matricula '${body.matricula}' ,cpf '${body.cpf}' e email '${body.email}' já estão  cadastrados!`})
                }
                return response
                    .status(402)
                    .json({menssage: `Matricula '${body.matricula}' e cpf '${body.cpf}' já estão cadastrados`})
            }
            console.log(body.matricula);
            return response
                .status(422)
                .json({message:`Matricula '${body.matricula}' já está cadastrada! `})
        }else if(cpf){
            console.log('cadastrado');
            if(cpf && email){
                return response
                    .status(422)
                    .json({message: `cpf '${body.cpf}' e email'${body.email}' já estão cadastrados`})
            }
            return response
                .status(402)
                .json({message:`cpf '${body.cpf}' cadastrado já está cadastrado` })
        }else if(email){
            console.log('cadastrado');
            return response
                .status(402)
                .json({message:`email '${body.email}' já está cadastrado`})
        }

        const novoUsuario = await prisma.usuario.create({
            data:{
                matricula: body.matricula,
                nome: body.nome,
                email: body.email,
                telefone: body.telefone,
                cpf: body.cpf,
                senha: body.senha,
                tipos:{
                    connect:{
                        id_tipo: idTipo
                    }
                }
            }
        })

        return response.status(201).json(novoUsuario);
    } catch (err) {
        console.log(err);        
        return response.status(422).json({message:'erro'})
    }
})
//-------------------------//-------------------------//
/**
    *!LOGAR USUARIO    
    *?OK
*/
app.post('/login', async(request, response) => {
    const body: any = request.body;

    const matricula = await prisma.usuario.findFirst({
        where:{
            matricula:body.matricula,
            senha:body.senha,
            AND:{
                tipos:{
                    every:{
                        tipo:{ }
                    }
                }
            }
        },include:{
            tipos:{
                select:{
                    descricao:true
                }
            }
        },
    })

    const token = {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTY2NzM2OTMyOCwiZXhwIjoxNjY3MzcyOTI4fQ'
    };


    const TipoUser = matricula?.tipos;
    const matriculaUser = matricula?.matricula;
    
    if(!matricula){
        return response.status(404).json({messagem: 'Matricula ou senha icorreta'})
    }else{
        console.log(TipoUser);        
        return response.status(201).json({TipoUser,matriculaUser, token});
    }
})
//-------------------------//-------------------------//
/**
    *!BUSCAR USUARIOS
    *?OK
*/
app.get('/listUsuario', async(request, response) =>{
    
    const usuarios = await prisma.usuario.findMany({
        select:{
            nome: true,
            matricula: true,
            email: true,
            telefone: true,
            cpf: true,
        }
    })
    console.log((usuarios));

    return response.json(usuarios)
})
//-------------------------//-------------------------//
/**
    *!BUSCAR PARTICIPANTE POR ID
    *?OK
*/
App.get('/Participante/:id/ab', async(request, response) =>{
    const id:any = request.params.id;
    try {
        const particpanteCadastrado = await prisma.particpante.findFirst({
            where:{
                edital:{
                    some:{
                        idEdital:id
                    }
                }
        },select:{
            usuarios_part:{}

        }
        })        
        console.log(particpanteCadastrado);
        return response.status(200).json(particpanteCadastrado)
    } catch (error) {
        
        console.log(error);        
    }
})
//-------------------------//-------------------------//
/**
    *!BUSCAR PARTICIPANTE
    *?OK
*/
App.get('/Participantes/:id/part', async(request, response) =>{
    const id:any = request.params.id;
    const participantes = await prisma.particpante.findMany({
        where:{
            edital:{
                some:{
                    idEdital:id
                }
            }
        },include:{
            usuarios_part:{
                select:{
                    matricula:true,
                    nome:true
                }
            }
        }
    })

    return response.status(202).json(participantes)
})
//-------------------------//-------------------------//
/**
    *!CADASTRAR PARTICIPANTE
    *?OK
*/
App.post('/Participante/:id', async(request, response) =>{
    const id:any = request.params.id;
    const body:any = request.body;

    try {
        const postPartici = await prisma.particpante.create({
            select:{
                edital:{
                    where:{
                        idEdital:id,
                    }
                },userId:true
            },data:{
                userId:body.userId,
                edital:{
                    connect:{
                        idEdital:id
                    }
                }
            }
        })
        return response.status(201).json(postPartici.userId)
        
    } catch (error) {
        return response.status(402).json({error})
    }
})
//-------------------------//-------------------------//
/**
    *!DESCADASTRAR PARTICIPANTE
    *?OK
*/
App.delete('/Participante/:id/delete', async(request, response) =>{
    const id:any = request.params.id;

    try {
        const DescadastroParticipante = await prisma.particpante.delete({
            where:{
                userId: id
            }
        })
        console.log(DescadastroParticipante);
        console.log(id);
        return response.status(200).json(DescadastroParticipante)
    } catch (error) {
        console.log(id, 'opa');
        console.log(error);        
        return response.status(400).json(error)
    }
})
//-------------------------//-------------------------//

/**
    *!LISTAR PARTICIPANTE(S)
    *?OK
*/
App.get('/Listar/Participante', async(request, response) => {

    try {
        const listParticipante = await prisma.particpante.findMany({ })

        return response.status(200).json(listParticipante);
    } catch (error) {
        return response.status(400).json(error)
    }
})
//-------------------------//-------------------------//
/**
    *!CRIAR EDITAL
    *?OK
*/
App.post('/Edital/:idC/:idD/:idU', async(request, response) =>{
    const idC:any = request.params.idC;
    const idD:any = request.params.idD;
    const idU:any = request.params.idU;

    const body:any = request.body;

    const createEdital = await prisma.edital.create({
        data:{
            editalCurso:{
                connect:{
                    id_curso:idC,
                }
            },
            editalDisciplina:{
                connect:{
                    id_disciplina:idD
                }
            },
            usuarios:{
                connect:{
                    matricula:idU
                }
            },
            dataInscricao:body.dataInscricao,
            vagas:body.vagas,
            cursoSigla:body.cursoSigla,
            descricaoEdital:body.descricaoEdital,
        }
    })

    try {
        return response.status(201).json(createEdital)
    } catch (error) {
        return response.status(400).json({message: `erro: ${error}`})
    }
})
//-------------------------//-------------------------//
/**
    *!DELETAR EDITAL
    *?OK
*/
App.delete('/Edital/:id/delete',async (request,response) => {
    const editalId:any = request.params.id

    const deleteEdital = await prisma.edital.delete({
        where:{
            idEdital:editalId
        }
    })

    try {
        return response.status(200).json(deleteEdital)
    } catch (error) {
        console.log(error);        
    }
})
//-------------------------//-------------------------//
/**
    *!ATUALIZAR EDITAL
    *?OK
*/
App.put('/Atualizar/:id/edital', async (request, response) =>{

    const editalId:any = request.params.id
    const body:any = request.body

    const atualizarEdital = await prisma.edital.update({
        where:{
            idEdital:editalId,            
        },
        data:{            
            vagas:body.vagas,
            dataInscricao: body.dataInscricao,
            descricaoEdital:body.descricaoEdital,
        }
    })

    try {
        return response.status(200).json(atualizarEdital)
    } catch (error) {
        console.log(error);        
        return response.status(400).json({message: "error ao requiris"})
    }
})
//-------------------------//-------------------------//
/**
    *!BUSCAR EDITAL(IS)
    *?OK
*/
App.get('/Edital/:idU/busca', async(request, response ) =>{
    const idU:any = request.params.idU;

    const editais = await prisma.edital.findMany({
        select:{    
            idEdital:true,        
            vagas:true,
            dataInscricao:true,
            descricaoEdital:true,
            cursoSigla:true,
            dataCriacaoEdital:true,
            disciplinaId:true,
            editalCurso:true,
            participanteId:true,
            editalDisciplina:true,
            participanteEdital:{
                select:{
                    userId:true,
                    _count:true
                }
            },
            
        },orderBy:{
            dataCriacaoEdital:"desc"
        },
        where:{
            usuarios:{
                matricula:idU
            }
        }
    })

    // console.log(typeof(editais));
    
    try {
        function objVazio(editais:any) {
            for (var prop in editais) {
                if (editais.hasOwnProperty(prop)){            
                    return response.status(201).json(editais)
                }else{
                    console.log("cheio");
                }
            }
            return true;
        }
        objVazio(editais)
    } catch (error) {
        return response.status(404).json({message: "Error"})
    }
})
//-------------------------//-------------------------//

/**
    *!BUSCAR EDITAL(IS) PARA PARTICIPANTES
    *?OK
*/
App.get('/Edital', async(request, response ) =>{

    const editais = await prisma.edital.findMany({
        select:{    
            idEdital:true,        
            vagas:true,
            dataInscricao:true,
            descricaoEdital:true,
            cursoSigla:true,
            dataCriacaoEdital:true,
            disciplinaId:true,
            editalCurso:true,
            participanteId:true,
            editalDisciplina:true,
            participanteEdital:{
                select:{
                    userId:true,
                    _count:true
                }
            },
            
        },orderBy:{
            dataCriacaoEdital:"desc"
        }
        
    })

    try {
        function objVazio(editais:any) {
            for (var prop in editais) {
                if (editais.hasOwnProperty(prop)){            
                    return response.status(201).json(editais)
                }else{
                    console.log("cheio");
                }
            }
            return true;
        }
        objVazio(editais)
    } catch (error) {
        return response.status(404).json({message: "Error"})
    }
})
/**
    *!BUSCAR DISCIPLINA(S)
    *?OK
*/
App.get('/disciplina/:id', async (request, response) => {
    const idCurso:any = request.params.id;

    const disciplinas = await prisma.disciplina.findMany({        
            where:{
                disciplinaCurso:{
                    some:{
                        id_curso: idCurso
                    }
                }
            }
    })

    return response.status(200).json(disciplinas);
});
App.get('/disc/:id', async(request, response) => {
    const id:any = request.params.id;

    const Disc = await prisma.disciplina.findMany({
        where:{
            disciplinaCurso:{
                every:{
                    id_curso:id
                }
            }
        }
    })
    console.log(Disc);
    return response.json(Disc)
})

/**
    *!BUSCAR CURSO(S)
    *?OK
*/
App.get('/curso', async(request, response) =>{    
    const cursos = await prisma.curso.findMany({
        select:{
            id_curso:true,
            nome:true,            
        }
    });

    return response.json(cursos);
})

/**
    *!CRIAR TURMA
    *?OK
*/
App.post('/Turma/:idC/:idD/criar', async (request, response) => {
    const idCurso:string = request.params.idC;
    const IdDisciplina:string = request.params.idD;
    // const idMonitor:string = request.params.idM;
    const body = request.body;

    const Turma = await prisma.turma.create({
        data:{
            codigo:gerarCodigo(),
            cursos:{
                connect:{
                    id_curso:idCurso
                }
            },
            disciplinas:{
                connect:{
                    id_disciplina:IdDisciplina
                }
            },
            monitores:{
                create:{
                    usuarios:{
                        connect:{
                            matricula:body.matricula
                        }
                    }
                }
            }
        }
    })

    return response.status(200).json(Turma)
})
/**
    *!BUSCAR TURMA
    *?OK
*/
App.get('/Turma/:id', async(request, response) =>{
    const matricula:any = request.params.id;
    const turmas = await prisma.turma.findMany({
        select:{
            codigo:true,
            cursos:{
                select:{
                    nome:true
                }
            },
            disciplinas:{
                select:{
                    nome:true
                }
            },
            monitores:{
                select:{
                    usuarios:{
                        select:{
                            nome:true
                        }
                    }
                }
            }
        },where:{
            monitores:{
                usuariosId:matricula
            }
        }
    })
    
    console.log(matricula)
    console.log(turmas);
    return response.status(200).json(turmas)
})
/**
    *!CRIAR PUBLICAÇÃO
    *?EM DESC...
*/
App.post('/Publicacao/:id', async (request,response) => {
    const codTurma:string = request.params.id;
    const body = request.body;

    const Publicacoes = await prisma.publicacao.create({
        data:{
            titulo:body.titulo,
            descricao:body.descricao,
            Turmas:{
                connect:{
                    codigo:codTurma
                }
            }
        }
    })
    return response.status(202).json(Publicacoes)
})
/**
    *!BUSCAR PUBLICAÇÃO
    *?OK
*/
App.get('/Publicacoes/:id',async (request,response) => {
    const codTurma:any = request.params.id;
    
    const Publicacoes = await prisma.publicacao.findMany({
        select:{
            idPublicacao:true,
            titulo:true,
            descricao:true,
            dtPublicao:true,
            Turmas:{
                select:{
                    codigo:true,
                }
            }
        },orderBy:{
            dtPublicao:'desc'
        },where:{
            Turmas:{
                codigo:codTurma
            }
        }
    })
    return response.status(200).json(Publicacoes.map((publ) =>{
        return {
            ...publ,
            dtPublicao: convertDate(publ.dtPublicao)
        }
    }))
})
/**
    *!CRIAR FREQUÊNCIA
    *?OK
*/
App.post('/Frequencia/:id', async(request, response) => {
    const idTurma:any = request.params.id;
    const body = request.body;

    const Frequencia = await prisma.frequencia.create({
        data:{
            idFrequencia:idTurma,
            dtFrequencia: body.dtFrequencia,
            hrInicio: convertHrMinu( body.hrInicio),
            hrFim: convertHrMinu( body.hrFim),
            ativDesepenhada: body.ativDesepenhada,
            observacao: body.observacao
        }
    })
    try {
        
        return response.status(200).json(Frequencia)
        
    } catch (error) {
        console.log(body);
        console.log(error);
        
    }

})
/**
    *!BUSCAR FREQUÊNCIA
    *?EM DES...
*/
App.get('/Frequencia/:id/turma', async (request, response) => {
    const idTurma:any = request.params.id;
    
    const Frequencia = await prisma.frequencia.findMany({
        select:{
            dtFrequencia:true,
            hrInicio:true,
            hrFim:true,
            turmas:{
                select:{
                    monitores:{
                        select:{
                            usuarios:{
                                select:{
                                    nome:true
                                }
                            }
                        }
                    }
                }
            }
        },where:{
            idFrequencia:idTurma
        }
    })

    return response.json(Frequencia.map((fre) => {
        return {
            ...fre,
            hrInicio: convertMinuHr(fre.hrInicio),
            hrFim: convertMinuHr(fre.hrFim)
        }
    }))
    
})
/**
    *!CRIAR RELATÓRIO
    *?EM DES...
*/
App.put('/Relatorio/:idU', async(request, response) => {
    const idU:any = request.params.idU;
    const body = request.body;
    
    const relatorio = await prisma.relatorio.create({
        data:{
            usuarios:{
                connect:{
                    matricula:idU
                }
            },
            introducao:body.introducao,
            desenvolvimento:body.desenvolvimento,
            conclusao:body.conclusao,
            status:false
        }
    })

    try {
        return response.status(202).json(relatorio)
    } catch (error) {
        console.log(error);
        
    }
})
/**
    *!BUSCAR RELATÓRIO
    *?EM DES...
*/
App.get('/Relatorio/:idU', async(request, response) => {
    const idU:any = request.params.idU;    
    const relatorio = await prisma.relatorio.findUnique({
        where:{
            usuarioId:idU
        }
    })

    try {
        return response.json(relatorio)
    } catch (error) {
        console.log(error);
        
    }
})

App.listen(3000);