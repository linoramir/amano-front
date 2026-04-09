import type { SectionItem } from "@/components/molecules/section";
import type { ClientProfile, BoletaRecord } from "@/lib/mocks/clientProfile";
import { Header } from "@/components/organism";
import { ClientInfoCard, ClientSummary, BoletasTable } from "@/components/organism/clientProfile";
import Sidebar from "@/components/organism/sidebar";

type ClientProfileSummaryItem = {
  label: string;
  value: string | number;
  accent?: boolean;
};

export type ClientProfileTemplateProps = {
  menuItems: SectionItem[];
  miNegocioItems: SectionItem[];
  client: ClientProfile;
  summaryItems: ClientProfileSummaryItem[];
  boletas: BoletaRecord[];
};

function ClientProfileTemplate({
  menuItems,
  miNegocioItems,
  client,
  summaryItems,
  boletas,
}: ClientProfileTemplateProps) {
  return (
    <div className="flex min-h-dvh bg-[var(--bg-page)]">
      <Sidebar menuItems={menuItems} miNegocioItems={miNegocioItems} />

      <div className="flex flex-1 flex-col min-w-0">
        <Header />

        <div className="flex-1 overflow-auto bg-[var(--bg-page)] p-6">
          <ClientInfoCard client={client} />
          <ClientSummary items={summaryItems} className="mt-6" />
          <BoletasTable boletas={boletas} className="mt-6" />
        </div>
      </div>
    </div>
  );
}

export default ClientProfileTemplate;
