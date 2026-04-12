import { cn } from "@/lib/utils";
import Sidebar from "@/components/organism/sidebar";
import Header from "@/components/organism/header";
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

const MAIN_MENU = [
  { label: "Dashboard", icon: Home, active: false, to: "/dashboard" },
  { label: "Rendimiento", icon: TrendingUp, to: "/rendimiento" },
  { label: "Boletas", icon: FileText, to: "/boletas" },
  { label: "Clientes", icon: Users, active: true, to: "/clientes" },
  { label: "Notificaciones", icon: Bell, to: "/notificaciones" },
  { label: "Lista negra", icon: Ban, to: "/lista-negra" },
];

const MI_NEGOCIO = [
  { label: "Productos", icon: Package, to: "/productos" },
  { label: "Ventas", icon: ShoppingCart, to: "/ventas" },
  { label: "Stock", icon: PackageCheck, to: "/stock" },
  { label: "Historial", icon: History, to: "/historial" },
];

export default function ClientsPage() {
  return (
    <div className={cn("flex min-h-dvh bg-[var(--bg-page)]")}>
      <Sidebar menuItems={MAIN_MENU} miNegocioItems={MI_NEGOCIO} />

      <div className="flex flex-1 flex-col min-w-0">
        <Header />

        <div className="flex-1 overflow-auto bg-[var(--bg-page)] p-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--text)]">Página de Clientes</h1>
            <p className="mt-2 text-[var(--text-muted)]">Esta es una página en blanco para clientes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
