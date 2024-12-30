import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface ExpenseCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
}

export const ExpenseCard = ({ title, amount, icon }: ExpenseCardProps) => {
  return (
    <Card className="bg-dashboard-card border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-dashboard-text">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-dashboard-text">
          {formatCurrency(amount)}
        </div>
      </CardContent>
    </Card>
  );
};