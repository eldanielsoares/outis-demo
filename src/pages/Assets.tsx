
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Car, Search, Calendar, AlertTriangle } from "lucide-react"
import { allAssets } from "@/data/mockData"

const statusColors = {
  "Funcionando": "bg-green-100 text-green-800",
  "Em Alerta": "bg-yellow-100 text-yellow-800",
  "Parado": "bg-red-100 text-red-800"
}

const severityColors = {
  "Alto": "bg-red-100 text-red-800",
  "Crítico": "bg-red-100 text-red-800",
  "Médio": "bg-yellow-100 text-yellow-800", 
  "Baixo": "bg-green-100 text-green-800"
}

const problemStatusColors = {
  "Pendente": "bg-yellow-100 text-yellow-800 !hover:bg-yellow-200",
  "Resolvido": "bg-green-100 text-green-800 !hover:bg-green-200",
  "Crítico": "bg-red-100 text-red-800 !hover:bg-red-200"
}

export default function Assets() {
  const [selectedAsset, setSelectedAsset] = useState(allAssets[0])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAssets = allAssets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.plate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ativos</h1>
          <p className="text-gray-600 mt-1">Gestão e monitoramento da frota de veículos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar - Assets List */}
        <div className="lg:col-span-1">
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                Lista de Ativos
              </CardTitle>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Buscar por nome, placa ou marca..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-3 max-h-[600px] overflow-y-auto !py-4">
              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedAsset.id === asset.id ? 'ring-2 ring-slate-900 bg-gray-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{asset.name}</h4>
                      <p className="text-sm text-gray-600">{asset.plate}</p>
                    </div>
                    <Badge className={statusColors[asset.status as keyof typeof statusColors]}>
                      {asset.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">{asset.brand} • {asset.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Panel - Asset Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Asset Info */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                Detalhes do Ativo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Nome do Veículo</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedAsset.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Placa</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedAsset.plate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div className="mt-1">
                      <Badge className={statusColors[selectedAsset.status as keyof typeof statusColors]}>
                        {selectedAsset.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Marca</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedAsset.brand}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Ano</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedAsset.year}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Código do Sensor</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedAsset.sensorCode}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problems History */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Histórico de Problemas e Alertas
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedAsset.problems.length > 0 ? (
                <div className="space-y-4">
                  {selectedAsset.problems.map((problem, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{problem.type}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {new Date(problem.date).toLocaleString('pt-BR')}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={severityColors[problem.severity as keyof typeof severityColors]}>
                            {problem.severity}
                          </Badge>
                          <Badge className={problemStatusColors[problem.status as keyof typeof problemStatusColors]}>
                            {problem.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Nenhum problema registrado para este veículo</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
