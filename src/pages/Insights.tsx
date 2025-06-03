
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  AlertTriangle, 
  Car, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Wrench,
  CheckCircle,
  AlertCircle,
  XCircle
} from "lucide-react"
import { insightDetails } from "@/data/mockData"

const severityColors = {
  "Alto": "bg-red-100 text-red-800",
  "Médio": "bg-yellow-100 text-yellow-800",
  "Baixo": "bg-green-100 text-green-800"
}

const statusColors = {
  "Em andamento": "bg-blue-100 text-blue-800",
  "Resolvido": "bg-green-100 text-green-800",
  "Crítico": "bg-red-100 text-red-800"
}

export default function Insights() {
  const insight = insightDetails

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Análise Detalhada</h1>
          <p className="text-gray-600 mt-1">Insights detalhados sobre problemas detectados</p>
        </div>
        <Button className="bg-black hover:bg-gray-800">
          Gerar Relatório
        </Button>
      </div>

      {/* Main Problem Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              {insight.problemType}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Descrição Técnica</h3>
              <p className="text-gray-700">{insight.description}</p>
            </div>
            
            <div className="flex gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Gravidade:</span>
                <Badge className={`ml-2 ${severityColors[insight.severity as keyof typeof severityColors]}`}>
                  {insight.severity}
                </Badge>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Status:</span>
                <Badge className={`ml-2 ${statusColors[insight.status as keyof typeof statusColors]}`}>
                  {insight.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Info */}
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              Veículo Impactado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Nome</label>
              <p className="font-semibold text-gray-900">{insight.vehicle.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Placa</label>
              <p className="font-semibold text-gray-900">{insight.vehicle.plate}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Modelo</label>
              <p className="font-semibold text-gray-900">{insight.vehicle.brand} {insight.vehicle.model}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Ano</label>
              <p className="font-semibold text-gray-900">{insight.vehicle.year}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Sensor OBD2</label>
              <p className="font-semibold text-gray-900">{insight.vehicle.sensorCode}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Linha do Tempo do Problema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900">Primeira Detecção</h3>
              <p className="text-sm text-gray-600 mt-1">
                {new Date(insight.timeline.firstDetected).toLocaleString('pt-BR')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-medium text-gray-900">Ocorrências</h3>
              <p className="text-sm text-gray-600 mt-1">{insight.timeline.occurrences} vezes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-medium text-gray-900">Última Ocorrência</h3>
              <p className="text-sm text-gray-600 mt-1">
                {new Date(insight.timeline.lastOccurrence).toLocaleString('pt-BR')}
              </p>
            </div>
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                insight.timeline.recurring ? 'bg-red-100' : 'bg-green-100'
              }`}>
                {insight.timeline.recurring ? (
                  <XCircle className="w-6 h-6 text-red-600" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                )}
              </div>
              <h3 className="font-medium text-gray-900">Recorrência</h3>
              <p className="text-sm text-gray-600 mt-1">
                {insight.timeline.recurring ? 'Recorrente' : 'Isolado'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Impact and Suggestions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Impacto Potencial
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Componentes Afetados</h3>
              <div className="flex flex-wrap gap-2">
                {insight.impact.components.map((component, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50">
                    {component}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Possíveis Consequências</h3>
              <ul className="space-y-2">
                {insight.impact.consequences.map((consequence, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{consequence}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Ações Recomendadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {insight.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{suggestion}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 pt-4">
              <Button className="bg-green-600 hover:bg-green-700 flex-1">
                Marcar como Resolvido
              </Button>
              <Button variant="outline" className="flex-1">
                Abrir Chamado
              </Button>
            </div>
            <Button variant="outline" className="w-full">
              Enviar para Manutenção
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Historical Data */}
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Dados Históricos Relacionados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insight.history.map((event, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{event.problem}</h4>
                    <p className="text-sm text-gray-600 mt-1">{event.resolution}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
