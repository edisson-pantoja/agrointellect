// AgroIntellect - Plataforma com layout moderno e navegação por etapas

import { useState } from "react";
import { BookOpen, Layers, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import planoEtapa1 from "@/data/planoEtapa1.json";

const etapas = [
  {
    nome: "Etapa 1",
    descricao: "Fundamentos",
    plano: planoEtapa1,
  },
  // Etapas futuras: Etapa 2 e Etapa 3 podem ser adicionadas aqui
];

export default function App() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [aulaAtual, setAulaAtual] = useState(0);
  const etapa = etapas[etapaAtual];
  const aula = etapa.plano[aulaAtual];

  const proximaAula = () => {
    if (aulaAtual + 1 < etapa.plano.length) {
      setAulaAtual(aulaAtual + 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-700 mb-6">AgroIntellect</h1>
        <nav className="space-y-4">
          {etapas.map((etapa, idx) => (
            <div key={idx}>
              <Button
                variant={etapaAtual === idx ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setEtapaAtual(idx);
                  setAulaAtual(0);
                }}
              >
                <Layers className="mr-2" /> {etapa.nome}
              </Button>
            </div>
          ))}
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <GraduationCap className="text-green-600" /> {etapa.nome} — {etapa.descricao}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <BookOpen className="text-green-700" /> {aula.titulo}
          </h3>
          <p className="text-gray-700 mb-4">{aula.descricao}</p>

          <div className="flex gap-4">
            <Button
              onClick={proximaAula}
              className="bg-green-600 hover:bg-green-700"
            >
              📘 Gerar próxima aula
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
