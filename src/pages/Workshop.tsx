
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Wrench, 
  Search, 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react"
import { workshopOpportunities } from "@/data/mockData"

const severityColors = {
  "Alto": "bg-red-100 text-red-800",
  "Crítico": "bg-red-100 text-red-800",
  "Médio": "bg-yellow-100 text-yellow-800",
  "Baixo": "bg-green-100 text-green-800"
}

const statusColors = {
  "Novo": "bg-blue-100 text-blue-800",
  "Contato feito": "bg-yellow-100 text-yellow-800",
  "Aguardando resposta": "bg-orange-100 text-orange-800",
  "Resolvido": "bg-green-100 text-green-800"
}

const workshopStats = {
  totalProblems: 24,
  inContact: 8,
  waitingResponse: 12,
  resolved: 156
}

export default function Workshop() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(workshopOpportunities[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [observations, setObservations] = useState("")

  const filteredOpportunities = workshopOpportunities.filter(opportunity => {
    const matchesSearch = opportunity.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.plate.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.problemType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || opportunity.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Oficina - Oportunidades de Serviço</h1>
          <p className="text-gray-600 mt-1">Gestão de problemas detectados e oportunidades de manutenção</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">Problemas Abertos</p>
                <p className="text-2xl font-bold text-blue-900">{workshopStats.totalProblems}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-800">Em Contato</p>
                <p className="text-2xl font-bold text-yellow-900">{workshopStats.inContact}</p>
              </div>
              <Phone className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-800">Aguardando Resposta</p>
                <p className="text-2xl font-bold text-orange-900">{workshopStats.waitingResponse}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">Resolvidos</p>
                <p className="text-2xl font-bold text-green-900">{workshopStats.resolved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar - Opportunities List */}
        <div className="lg:col-span-1">
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Oportunidades de Serviço
              </CardTitle>
              <div className="space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <Input
                    placeholder="Buscar oportunidades..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="Novo">Novo</SelectItem>
                    <SelectItem value="Contato feito">Contato feito</SelectItem>
                    <SelectItem value="Aguardando resposta">Aguardando resposta</SelectItem>
                    <SelectItem value="Resolvido">Resolvido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 max-h-[500px] overflow-y-auto">
              {filteredOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  onClick={() => setSelectedOpportunity(opportunity)}
                  className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedOpportunity.id === opportunity.id ? 'ring-2 ring-black bg-gray-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{opportunity.vehicle}</h4>
                      <p className="text-sm text-gray-600">{opportunity.plate}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge className={severityColors[opportunity.severity as keyof typeof severityColors]}>
                        {opportunity.severity}
                      </Badge>
                      <Badge className={statusColors[opportunity.status as keyof typeof statusColors]}>
                        {opportunity.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{opportunity.problemType}</p>
                  <p className="text-xs text-gray-500">{opportunity.occurrences} ocorrências</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Panel - Opportunity Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Problem Details */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Detalhes do Problema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Veículo</label>
                  <p className="font-semibold text-gray-900">{selectedOpportunity.vehicle}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Placa</label>
                  <p className="font-semibold text-gray-900">{selectedOpportunity.plate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Tipo do Problema</label>
                  <p className="font-semibold text-gray-900">{selectedOpportunity.problemType}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Cliente</label>
                  <p className="font-semibold text-gray-900">{selectedOpportunity.client}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Detectado em</label>
                  <p className="font-semibold text-gray-900">
                    {new Date(selectedOpportunity.detectedAt).toLocaleString('pt-BR')}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Ocorrências</label>
                  <p className="font-semibold text-gray-900">{selectedOpportunity.occurrences} vezes</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-600">Gravidade:</span>
                  <Badge className={`ml-2 ${severityColors[selectedOpportunity.severity as keyof typeof severityColors]}`}>
                    {selectedOpportunity.severity}
                  </Badge>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Status:</span>
                  <Badge className={`ml-2 ${statusColors[selectedOpportunity.status as keyof typeof statusColors]}`}>
                    {selectedOpportunity.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Ações Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  E-mail
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Telefone
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button className="flex items-center gap-2 bg-black hover:bg-gray-800">
                  <FileText className="w-4 h-4" />
                  Gerar Proposta
                </Button>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Atualizar Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Novo">Novo</SelectItem>
                    <SelectItem value="Contato feito">Contato feito</SelectItem>
                    <SelectItem value="Aguardando resposta">Aguardando resposta</SelectItem>
                    <SelectItem value="Resolvido">Resolvido</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Observações Internas</label>
                <Textarea
                  placeholder="Ex: Cliente não atendeu, Aguardando retorno, etc..."
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  rows={3}
                />
                <Button variant="outline" className="w-full">
                  Salvar Observações
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Impact Analysis */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Análise de Impacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-medium text-yellow-800 mb-2">Possíveis Consequências</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Risco de pane inesperada do veículo</li>
                  <li>• Aumento no consumo de combustível</li>
                  <li>• Desgaste prematuro de componentes</li>
                  <li>• Custos de reparo mais elevados se não tratado</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2">Oportunidade de Negócio</h3>
                <p className="text-sm text-blue-700">
                  Problema recorrente que pode resultar em serviços de manutenção preventiva e corretiva. 
                  Valor estimado do serviço: R$ 800 - R$ 1.500
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
