
export const fleetStats = {
  totalAssets: 127,
  activeAssets: 98,
  alertAssets: 18,
  stoppedAssets: 11,
  totalSensors: 127,
  operationTime: "2.5 anos"
}

export const chartData = [
  { name: 'Em Funcionamento', value: 98, color: '#10b981' },
  { name: 'Em Alerta', value: 18, color: '#f59e0b' },
  { name: 'Parados', value: 11, color: '#ef4444' }
]

export const recentProblems = [
  {
    id: 1,
    vehicle: "Caminhão Mercedes 2019",
    plate: "ABC-1234",
    problem: "Falha na bateria",
    severity: "Alto",
    date: "2025-06-02 14:30",
    status: "Pendente",
    description: "Tensão da bateria abaixo do normal detectada pelo sensor OBD2"
  },
  {
    id: 2,
    vehicle: "Van Ford Transit 2020", 
    plate: "DEF-5678",
    problem: "Superaquecimento do motor",
    severity: "Crítico",
    date: "2025-06-02 13:15",
    status: "Em análise",
    description: "Temperatura do motor acima de 95°C por mais de 10 minutos"
  },
  {
    id: 3,
    vehicle: "Pickup Toyota Hilux 2021",
    plate: "GHI-9012", 
    problem: "Sistema de ignição irregular",
    severity: "Médio",
    date: "2025-06-02 11:45",
    status: "Resolvido",
    description: "Falhas intermitentes no sistema de ignição detectadas"
  }
]

export const recentAssets = [
  {
    id: 1,
    name: "Caminhão Mercedes Atego",
    plate: "ABC-1234",
    brand: "Mercedes-Benz",
    year: 2019,
    sensorCode: "OBD-001",
    status: "Em Alerta"
  },
  {
    id: 2,
    name: "Van Ford Transit",
    plate: "DEF-5678", 
    brand: "Ford",
    year: 2020,
    sensorCode: "OBD-002",
    status: "Funcionando"
  },
  {
    id: 3,
    name: "Pickup Toyota Hilux",
    plate: "GHI-9012",
    brand: "Toyota", 
    year: 2021,
    sensorCode: "OBD-003",
    status: "Funcionando"
  }
]

export const allAssets = [
  {
    id: 1,
    name: "Caminhão Mercedes Atego",
    plate: "ABC-1234",
    brand: "Mercedes-Benz",
    year: 2019,
    sensorCode: "OBD-001",
    status: "Em Alerta",
    problems: [
      {
        type: "Falha na bateria",
        date: "2025-06-02 14:30",
        status: "Pendente",
        severity: "Alto"
      },
      {
        type: "Pressão dos pneus baixa",
        date: "2025-06-01 09:15", 
        status: "Resolvido",
        severity: "Médio"
      }
    ]
  },
  {
    id: 2,
    name: "Van Ford Transit",
    plate: "DEF-5678",
    brand: "Ford", 
    year: 2020,
    sensorCode: "OBD-002",
    status: "Funcionando",
    problems: [
      {
        type: "Manutenção preventiva",
        date: "2025-05-28 16:00",
        status: "Resolvido", 
        severity: "Baixo"
      }
    ]
  },
  {
    id: 3,
    name: "Pickup Toyota Hilux",
    plate: "GHI-9012",
    brand: "Toyota",
    year: 2021, 
    sensorCode: "OBD-003",
    status: "Funcionando",
    problems: [
      {
        type: "Sistema de ignição irregular",
        date: "2025-06-02 11:45",
        status: "Resolvido",
        severity: "Médio"
      }
    ]
  },
  {
    id: 4,
    name: "Micro-ônibus Volkswagen",
    plate: "JKL-3456",
    brand: "Volkswagen",
    year: 2018,
    sensorCode: "OBD-004", 
    status: "Parado",
    problems: [
      {
        type: "Vazamento de óleo",
        date: "2025-06-02 08:30",
        status: "Crítico",
        severity: "Alto"
      }
    ]
  }
]

export const insightDetails = {
  id: 1,
  problemType: "Falha na bateria",
  description: "Sistema de carregamento da bateria apresentando irregularidades. Tensão abaixo do esperado pode causar falhas no sistema elétrico.",
  severity: "Alto",
  status: "Em andamento",
  vehicle: {
    name: "Caminhão Mercedes Atego",
    plate: "ABC-1234", 
    brand: "Mercedes-Benz",
    model: "Atego 1719",
    year: 2019,
    sensorCode: "OBD-001"
  },
  timeline: {
    firstDetected: "2025-06-01 08:30",
    occurrences: 5,
    lastOccurrence: "2025-06-02 14:30",
    recurring: true
  },
  impact: {
    components: ["Sistema elétrico", "Alternador", "Starter"],
    consequences: [
      "Risco de pane elétrica",
      "Dificuldade na partida", 
      "Falha nos sistemas eletrônicos",
      "Parada inesperada do veículo"
    ]
  },
  suggestions: [
    "Verificação imediata do sistema de carga",
    "Teste da bateria e alternador",
    "Inspeção dos cabos e conexões",
    "Substituição preventiva da bateria"
  ],
  history: [
    {
      date: "2025-03-15",
      problem: "Bateria descarregada",
      resolution: "Substituição da bateria"
    },
    {
      date: "2025-01-20", 
      problem: "Falha no alternador",
      resolution: "Reparo do alternador"
    }
  ]
}

export const workshopOpportunities = [
  {
    id: 1,
    vehicle: "Caminhão Mercedes Atego",
    plate: "ABC-1234",
    problemType: "Falha na bateria", 
    severity: "Alto",
    status: "Novo",
    detectedAt: "2025-06-02 14:30",
    occurrences: 5,
    client: "Transportadora São Paulo LTDA"
  },
  {
    id: 2,
    vehicle: "Van Ford Transit",
    plate: "DEF-5678",
    problemType: "Superaquecimento", 
    severity: "Crítico",
    status: "Contato feito", 
    detectedAt: "2025-06-02 13:15",
    occurrences: 2,
    client: "Logística Express"
  },
  {
    id: 3,
    vehicle: "Pickup Toyota Hilux", 
    plate: "GHI-9012",
    problemType: "Sistema de ignição",
    severity: "Médio",
    status: "Aguardando resposta",
    detectedAt: "2025-06-02 11:45", 
    occurrences: 3,
    client: "Construtora ABC"
  },
  {
    id: 4,
    vehicle: "Micro-ônibus Volkswagen",
    plate: "JKL-3456", 
    problemType: "Vazamento de óleo",
    severity: "Alto",
    status: "Resolvido",
    detectedAt: "2025-06-02 08:30",
    occurrences: 1,
    client: "Turismo Cidade"
  }
]
