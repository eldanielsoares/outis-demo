
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  color: "blue" | "green" | "yellow" | "red"
  trend?: {
    value: number
    isPositive: boolean
  }
}

const colorClasses = {
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  green: "bg-green-50 text-green-600 border-green-200", 
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
  red: "bg-red-50 text-red-600 border-red-200"
}

const iconBgClasses = {
  blue: "bg-blue-100",
  green: "bg-green-100",
  yellow: "bg-yellow-100", 
  red: "bg-red-100"
}

export function StatsCard({ title, value, icon: Icon, color, trend }: StatsCardProps) {
  return (
    <Card className={`border-2 ${colorClasses[color]} transition-all hover:shadow-lg`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
              {trend && (
                <span className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
              )}
            </div>
          </div>
          <div className={`p-3 rounded-lg ${iconBgClasses[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
