
import { StatsCard } from "@/components/StatsCard"
import { DonutChart } from "@/components/DonutChart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, AlertTriangle, CheckCircle, XCircle, Users, Clock, ArrowRight } from "lucide-react"
import { fleetStats, chartData, recentProblems, recentAssets } from "@/data/mockData"
import { Link } from "react-router-dom"

const severityColors = {
  "Alto": "bg-red-100 text-red-800",
  "Crítico": "bg-red-100 text-red-800", 
  "Médio": "bg-yellow-100 text-yellow-800",
  "Baixo": "bg-green-100 text-green-800"
}

const statusColors = {
  "Pendente": "bg-yellow-100 text-yellow-800",
  "Em análise": "bg-blue-100 text-blue-800",
  "Resolvido": "bg-green-100 text-green-800",
  "Funcionando": "bg-green-100 text-green-800",
  "Em Alerta": "bg-yellow-100 text-yellow-800", 
  "Parado": "bg-red-100 text-red-800"
}

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Visão geral da frota e monitoramento em tempo real</p>
        </div>
        <div className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleString('pt-BR')}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total de Ativos"
          value={fleetStats.totalAssets}
          icon={Car}
          color="blue"
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Ativos em Funcionamento"
          value={fleetStats.activeAssets}
          icon={CheckCircle}
          color="green"
          trend={{ value: 2, isPositive: true }}
        />
        <StatsCard
          title="Ativos em Alerta"
          value={fleetStats.alertAssets}
          icon={AlertTriangle}
          color="yellow"
          trend={{ value: 3, isPositive: false }}
        />
        <StatsCard
          title="Ativos em Parada"
          value={fleetStats.stoppedAssets}
          icon={XCircle}
          color="red"
          trend={{ value: 1, isPositive: false }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donut Chart */}
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              Distribuição da Frota
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DonutChart data={chartData} />
          </CardContent>
        </Card>

        {/* Recent Problems */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Últimos Problemas Detectados
            </CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/insights">
                Ver mais <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProblems.slice(0, 3).map((problem) => (
              <div key={problem.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{problem.vehicle}</h4>
                    <p className="text-sm text-gray-600">{problem.plate}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={severityColors[problem.severity as keyof typeof severityColors]}>
                      {problem.severity}
                    </Badge>
                    <Badge className={statusColors[problem.status as keyof typeof statusColors]}>
                      {problem.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">{problem.problem}</p>
                <p className="text-xs text-gray-500">{new Date(problem.date).toLocaleString('pt-BR')}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Company Summary */}
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Resumo da Empresa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{fleetStats.totalAssets}</div>
                <div className="text-sm text-gray-600">Veículos Total</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{fleetStats.totalSensors}</div>
                <div className="text-sm text-gray-600">Sensores Ativos</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900">Tempo de Operação</div>
                <div className="text-sm text-gray-600">{fleetStats.operationTime}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Assets */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              Ativos Recentes
            </CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/ativos">
                Ver mais <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAssets.map((asset) => (
              <div key={asset.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{asset.name}</h4>
                    <p className="text-sm text-gray-600">{asset.plate} • {asset.brand} {asset.year}</p>
                  </div>
                  <Badge className={statusColors[asset.status as keyof typeof statusColors]}>
                    {asset.status}
                  </Badge>
                </div>
                <div className="text-xs text-gray-500">
                  Sensor: {asset.sensorCode}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
