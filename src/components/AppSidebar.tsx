
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Home, Car, BarChart3, Wrench } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Ativos",
    url: "/ativos",
    icon: Car,
  },
  {
    title: "Insights",
    url: "/insights",
    icon: BarChart3,
  },
  // {
  //   title: "Oficina",
  //   url: "/oficina",
  //   icon: Wrench,
  // },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Outis</h2>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-medium mb-2">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={
                    location.pathname === item.url 
                      ? "bg-black text-white hover:bg-black hover:text-white" 
                      : "text-gray-700 hover:bg-gray-100"
                  }>
                    <Link to={item.url} className="flex items-center gap-3 py-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Versão 2.1.0 • OBD2 Monitor
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
