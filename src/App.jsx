import { useState, useEffect } from "react";
import Button from './components/ui/button'
import { Card, CardContent } from './components/ui/card';
import { BookOpenText, Brain } from "lucide-react";
import planoEtapa1 from './data/planoEtapa1.json';

export default function App() {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const aulaAtual = planoEtapa1[index];

  const gerarProximaAula = () => {
    if (index + 1 < planoEtapa1.length) {
      setIndex(index + 1);
      setCompleted(false);
    }
  };

  const marcarComoConcluida = () => {
    setCompleted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-2">AgroIntellect</h1>
      <p className="text-base mb-6">Sua plataforma de estudos com o Professor Dr. Caio Valverde</p>

      <Card className="mb-6">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BookOpenText className="text-green-700" /> {aulaAtual.titulo}
          </h2>
          <p>{aulaAtual.descricao}</p>

          <Button
            onClick={marcarComoConcluida}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            ✅ Marcar como concluída
          </Button>

          {completed && (
            <div className="text-green-700 font-semibold mt-2">
              Aula marcada como concluída!
            </div>
          )}

          <Button
            onClick={gerarProximaAula}
            className="bg-green-600 hover:bg-green-700 mt-4"
          >
            📘 Gerar próxima aula
          </Button>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-500 flex items-center gap-2">
        <Brain className="w-4 h-4" /> Etapa atual: Fundamentos (Etapa 1)
      </div>
    </div>
  );
}
