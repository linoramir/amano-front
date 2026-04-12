import {
  Home,
  TrendingUp,
  FileText,
  Users,
  Bell,
  Ban,
  Package,
  ShoppingCart,
  PackageCheck,
  History,
} from "lucide-react";
import { DashboardTemplate } from "@/components/template";
import {
  MOCK_CHART_DATA,
  MOCK_METRICS,
} from "@/lib/mocks/metrics";
import {
  MOCK_RECENT_CLIENTS,
  MOCK_TOP_PRODUCT,
} from "@/lib/mocks/dashboard";

const MAIN_MENU = [
  { label: "Dashboard", icon: Home, active: true, to: "/dashboard" },
  { label: "Rendimiento", icon: TrendingUp, to: "/rendimiento" },
  { label: "Boletas", icon: FileText, to: "/boletas" },
  { label: "Clientes", icon: Users, to: "/clientes" },
  { label: "Notificaciones", icon: Bell, to: "/notificaciones" },
  { label: "Lista negra", icon: Ban, to: "/lista-negra" },
];

const MI_NEGOCIO = [
  { label: "Productos", icon: Package, to: "/productos" },
  { label: "Ventas", icon: ShoppingCart, to: "/ventas" },
  { label: "Stock", icon: PackageCheck, to: "/stock" },
  { label: "Historial", icon: History, to: "/historial" },
];

export default function DashboardPage() {
  return (
    <DashboardTemplate
      menuItems={MAIN_MENU}
      miNegocioItems={MI_NEGOCIO}
      chartData={MOCK_CHART_DATA}
      chartTitle="Ventas del mes"
      metrics={MOCK_METRICS}
      recentClients={MOCK_RECENT_CLIENTS}
      topProduct={MOCK_TOP_PRODUCT}
    />
  );
}
