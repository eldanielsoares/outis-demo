
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Insights from "./pages/Insights";
import Workshop from "./pages/Workshop";
import NotFound from "./pages/NotFound";
import WelcomeModal from "./components/WelcomeModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <main className="flex-1 bg-gray-50">
              <div className="p-4 border-b border-gray-200 bg-white">
                <SidebarTrigger />
              </div>
              <WelcomeModal/>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ativos" element={<Assets />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/oficina" element={<Workshop />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
