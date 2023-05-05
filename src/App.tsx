import { useState } from "react";

function App() {
  const [effect, setEffect] = useState(false);

  const handleDownPage = () => {
    setEffect(true);
    document?.getElementById("main-content")?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <header className="min-h-[90vh] sm:min-h-[100vh] bg-hero-pattern-mobile sm:bg-hero-pattern bg-contain sm:bg-cover flex justify-center bg-center bg-no-repeat bg-newBlack relative">
        <button
          className={`${effect && "animate-wiggle"
            } text-white font-bold bg-red-500 px-20 py-6 rounded flex items-center absolute bottom-[-20px] hover:shadow-xl border border-white`}
          onClick={handleDownPage}
          onAnimationEnd={() => setEffect(false)}
        >
          Saiba mais
        </button>
      </header>
      <main className="min-h-screen pb-10" id="main-content">
        <section className="max-w-6xl m-auto py-10 mt-20 px-4">
          <h2 className="text-4xl text-center mb-6 font-bold">Regras do Concurso</h2>
          <h3 className="text-2xl mb-3">Introdução:</h3>
          <p className="mb-6">
            O concurso <span className="italic font-bold">"Caçada aos Bugs com Mentor Cycle"</span> tem como objetivo envolver a comunidade na identificação e correção de bugs no projeto Mentor Cycle. O prêmio é um Teclado Gamer Razer Cynosa V2, Chroma.
          </p>
          <div className="flex flex-col items-center justify-center">
            <p className="italic text-sm">foto meramente ilustrativa</p>
            <img src="/teclado.png" alt="premio concurso" className="h-[500px]" />
          </div>
          <h3 className="text-2xl mb-3">Inscrições:</h3>
          <p className="mb-6">
            As inscrições podem ser feitas a qualquer momento durante o período do concurso. Para se inscrever, basta estar atento ao início do concurso, que ocorrerá assim que o deploy do projeto for finalizado e o software estiver online.
          </p>
          <h3 className="text-2xl mb-3">Submissão de bugs:</h3>
          <p className="mb-6">
            Os participantes deverão reportar os bugs encontrados por meio de uma issue no <a href="https://github.com/Mentor-Cycle" className="text-blue-800 hover:text-blue-500">repositório do projeto no GitHub</a>. A issue deve conter uma descrição detalhada do bug, incluindo informações sobre como reproduzi-lo, capturas de tela, se aplicável.
          </p>
          <h3 className="text-2xl mb-3">Categorias de bugs e pontuação:</h3>
          <p className="mb-6">
            Os bugs serão divididos em diferentes categorias, de acordo com seu grau de severidade e impacto no projeto. Cada categoria terá uma pontuação específica atribuída a ela, conforme apresentado na tabela abaixo:
          </p>
          <div className="mb-6  mt-10 shadow-sm overflow-x-auto">
            <table className="mb-6 border border-gray-600 mt-10 shadow-sm overflow-scroll">
              <thead className="border border-gray-600">
                <tr className="border border-gray-600">
                  <th className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider">Categoria</th>
                  <th className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider">Descrição</th>
                  <th className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider">Pontuação</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Bugs críticos</td>
                  <td className="px-6 py-4">Problemas graves que afetam a funcionalidade central do projeto e impedem seu uso adequado.</td>
                  <td className="px-6 py-4">10 pontos</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Bugs de funcionalidade</td>
                  <td className="px-6 py-4">Problemas que afetam determinadas funcionalidades do projeto, mas não impedem seu uso geral.</td>
                  <td className="px-6 py-4">7 pontos</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Bugs de interface</td>
                  <td className="px-6 py-4">Problemas relacionados ao design e layout da plataforma, incluindo elementos visuais que não funcionam corretamente.</td>
                  <td className="px-6 py-4">5 pontos</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Bugs menores ou melhorias</td>
                  <td className="px-6 py-4">Problemas de menor impacto, como erros de digitação, mensagens de erro incorretas ou sugestões de melhorias na usabilidade.</td>
                  <td className="px-6 py-4">3 pontos</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-2xl mb-3">Avaliação e seleção do vencedor:</h3>
          <p className="mb-6">
            A equipe do projeto Mentor Cycle analisará todas as issues reportadas e atribuirá pontos aos participantes de acordo com a categoria do bug e sua severidade. O vencedor será o participante que acumular mais pontos durante o período do concurso.
          </p>
          <h3 className="text-2xl mb-3">Prêmio:</h3>
          <p className="mb-6">
            O vencedor do concurso receberá um Teclado Gamer Razer Cynosa V2, Chroma, Membrane Switch, US - RZ03-03400200-R3U1. O prêmio será enviado ao endereço fornecido pelo vencedor após o término do concurso e a confirmação dos resultados. A equipe da Mentor Cycle pode alterar a Marca e Modelo do produto da premiação, caso assim seja necessário por motivos adversos.
          </p>
          <h3 className="text-2xl mb-3">Critérios de desempate:</h3>
          <p className="mb-6">
            Em caso de empate na pontuação, o vencedor será determinado com base na ordem de submissão das issues: o participante que tiver enviado a issue que resultou na pontuação de desempate primeiro será considerado o vencedor.
          </p>
          <p>
            A equipe da Mentor Cycle pode a qualquer momento desqualificar algum participante que esteja agindo de má-fé ou tentando explorar brechas nas regras.
          </p>
          <p className="mt-10 font-bold">
            Ao participar do concurso "Caçada aos Bugs com Mentor Cycle", os concorrentes concordam com todas as regras estabelecidas neste documento e se comprometem a agir de acordo com as diretrizes aqui apresentadas.
          </p>

        </section>
      </main>
      <footer className="flex justify-center items-start min-h-[55vh] py-10">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbvDJ7XA7EhGWszoncuFnGs1XsXXrGGgVLpkQdhCwMQfhU_Q/viewform?embedded=true" className="text-lg text-white font-bold bg-red-500 w-[250px] text-center py-8 rounded-lg hover:bg-red-800 max-w-xs">Inscreva-se</a>
      </footer>
    </>
  )
}

export default App
