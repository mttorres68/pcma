import React, { useEffect, useState } from 'react'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TextArea, TextRelatorio } from '../../../Components/TextArea';
import { Navbar } from "@material-tailwind/react"
import { Api } from '../../../Services/api';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const Relatorio = () => {
  const [relatorio, setRelatorio] = useState()
  const [introducao, setIntroducao] = useState('')
  const [desenvolvimento, setDesenvolvimento] = useState('')
  const [conclusao, setConclusao] = useState('')
  const [matricula, setMatricula] = useState(() => {
    const matri = JSON.parse( window.localStorage.getItem('u'))
    return matri.matricula
  })

  const docDefinition = {
    pageSize: 'A4',
    content: [      
      {
        image: 'snow',
        fit: [100, 100]
      },
      {
        text:'MINISTÉRIO DA EDUCAÇÃO SECRETARIA DE EDUCAÇÃO PROFISSIONAL E TECNOLÓGICA INSTITUTO FEDERAL E EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PIAUÍ CAMPUS FLORIANO',
        alignment:'center',
        style:'cabecalho',
      },
      {
        text:'Introdução',
        style:'subtitle'
      },
      `${introducao}`,
      {
        text:'Desenvolvimento',
        style:'subtitle'
      },
      `${desenvolvimento}`,
      {
        text:'Conclusão',
        style:'subtitle'
      },
      {
        text:`${conclusao}`,
        style:'text'
      },      
      {
        text:'Rua Francisco Urquiza Machado, 462, Meladão. Floriano - Piauí\nTelefone: (89) 3515-6400 - E-mail: campusfloriano@ifpi.edu.br - Site: www.floriano.ifpi.edu.br',
        alignment:'center',
        style:'rodape'
      }
    ],
    styles: {
      cabecalho: {
        fontSize: 18,
        bold: true,
        
      },
      subtitle: {
        fontSize: 15,
        bold: true,
      },
      text: {
        alignment: 'justify'
      },
      quote: {
        italics: true
      },
      rodape: {
        fontSize: 8
      }
    },
    images:{

      snow: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Instituto_Federal_do_Piau%C3%AD_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_do_Piau%C3%AD_-_Marca_Vertical_2015.svg.png',
      strawberries:{
        url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Instituto_Federal_do_Piau%C3%AD_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_do_Piau%C3%AD_-_Marca_Vertical_2015.svg.png',
      }

    }
    
  };
  
  const gerarPdf = () => {
    const document = pdfMake.createPdf(docDefinition).open();
    return document;
  }
  
  const locaStore = () =>{
    const relJson = JSON.stringify( {'Introducao':introducao, 'Desenvolvimento':desenvolvimento, 'Conclusao':conclusao})
    const Rel = localStorage.setItem('loccal',relJson);
    alert('Salvo')
    return Rel
  }
  const  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);        

    console.log(data);
    try {
      await Api.put(`Relatorio/${matricula}`,{
        introducao:data.introducao,
        desenvolvimento:data.desenvolvimento,
        conclusao:data.conclusao,
      })
    }catch(error){
        console.log(error);
    }
  }
  
  async function getRelatorio (){
    await Api.get(`Relatorio/${matricula}`)
      .then(response => {setRelatorio(response.data)})      
  }

  useEffect(() =>{
    getRelatorio()
  }, [])
  console.log(relatorio);

  return (
    <div className="justify-center m-4">
      <Navbar
          aria-label="Site nav"
          className=" flex lg:w-[60vw] items-center justify-between p-4 py-2 px-4 lg:px-8 lg:py-4 mt-6 text-center font-extrabold bg-gray-900  relative border-collapse border-gray-200  shadow-2xl mb-6"
        >
        <span>Lançar relatório</span>
      </Navbar>

      <div >
        <div
          className="m-2 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2 lg:gap-8 gap-4 sm:w-[35vw] md:w-[50vw] lg:w-[60vw]"
        >
          <form onSubmit={handleSubmit}>
            <TextRelatorio
              label="Introdução"
              name="introducao"
              rows={8}
              value={introducao}
              onChange={({target}) => setIntroducao(target.value)}
            />
            
            <TextRelatorio
              label="Desenvolvimento"
              name="desenvolvimento"
              rows={8}
              value={desenvolvimento}
              onChange={({target}) => setDesenvolvimento(target.value)}
            />
            <TextRelatorio
              label="Conclusão"
              name="conclusao"
              rows={8}
              value={conclusao}
              onChange={({target}) => setConclusao(target.value)}
            />
            
            <div className=" justify-center text-center flex gap-5">
              <div>
                <button
                  className="text-white uppercase bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center "
                  onClick={(() => gerarPdf())}
                >
                  Gerar pdf
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white uppercase bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center "
                  onClick={(() => locaStore())}
                >
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>      
    </div>
  )
}