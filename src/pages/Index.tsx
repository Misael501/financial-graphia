import { CreditCard, TrendingUp, Wallet } from "lucide-react";
import { ExpenseCard } from "@/components/dashboard/ExpenseCard";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import { ConnectBankCard } from "@/components/dashboard/ConnectBankCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-background p-8">
      <h1 className="text-3xl font-bold text-dashboard-text mb-8">
        Dashboard Financiero
      </h1>
      
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <ExpenseCard
          title="Gasto Total Mensual"
          amount={2459.32}
          icon={<Wallet className="h-4 w-4 text-dashboard-accent" />}
        />
        <ExpenseCard
          title="Mayor Gasto"
          amount={349.99}
          icon={<TrendingUp className="h-4 w-4 text-dashboard-accent" />}
        />
        <ExpenseCard
          title="Tarjetas Conectadas"
          amount={0}
          icon={<CreditCard className="h-4 w-4 text-dashboard-accent" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <ExpenseChart />
        </div>
        <div>
          <ConnectBankCard />
        </div>
      </div>
    </div>
  );
};

export default Index;