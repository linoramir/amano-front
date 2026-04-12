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
import ClientProfileTemplate from "@/components/template/clientProfile";
import { MOCK_CLIENT_PROFILE, MOCK_BOLETAS } from "@/lib/mocks/clientProfile";

const MAIN_MENU = [
  { label: "Dashboard", icon: Home },
  { label: "Rendimiento", icon: TrendingUp },
  { label: "Boletas", icon: FileText },
  { label: "Clientes", icon: Users, active: true },
  { label: "Notificaciones", icon: Bell },
  { label: "Lista negra", icon: Ban },
];

const MI_NEGOCIO = [
  { label: "Productos", icon: Package },
  { label: "Ventas", icon: ShoppingCart },
  { label: "Stock", icon: PackageCheck },
  { label: "Historial", icon: History },
];

const SUMMARY_ITEMS = [
  { label: "Total compras", value: MOCK_CLIENT_PROFILE.totalCompras },
  { label: "Total gastado", value: `S/ ${MOCK_CLIENT_PROFILE.totalGastado.toLocaleString("es-PE")}`, accent: true },
  { label: "Boletas pagadas", value: MOCK_CLIENT_PROFILE.boletasPagadas },
  { label: "Boletas pendientes", value: MOCK_CLIENT_PROFILE.boletasPendientes },
];

export default function ClientProfilePage() {
  return (
    <ClientProfileTemplate
      menuItems={MAIN_MENU}
      miNegocioItems={MI_NEGOCIO}
      client={MOCK_CLIENT_PROFILE}
      summaryItems={SUMMARY_ITEMS}
      boletas={MOCK_BOLETAS}
    />
  );
}
