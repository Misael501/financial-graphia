import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

const mockData = {
  weekly: [
    { name: "Lun", amount: 120 },
    { name: "Mar", amount: 300 },
    { name: "Mie", amount: 200 },
    { name: "Jue", amount: 278 },
    { name: "Vie", amount: 189 },
    { name: "Sab", amount: 239 },
    { name: "Dom", amount: 349 },
  ],
  monthly: [
    { name: "Sem 1", amount: 1200 },
    { name: "Sem 2", amount: 900 },
    { name: "Sem 3", amount: 1400 },
    { name: "Sem 4", amount: 1100 },
  ],
  yearly: [
    { name: "Ene", amount: 4200 },
    { name: "Feb", amount: 3800 },
    { name: "Mar", amount: 4100 },
    { name: "Abr", amount: 3900 },
  ],
};

export const ExpenseChart = () => {
  return (
    <Card className="bg-dashboard-card border-none">
      <CardHeader>
        <CardTitle className="text-dashboard-text">Gastos en el Tiempo</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="space-y-4">
          <TabsList className="bg-dashboard-background">
            <TabsTrigger value="weekly">Semana</TabsTrigger>
            <TabsTrigger value="monthly">Mes</TabsTrigger>
            <TabsTrigger value="yearly">Año</TabsTrigger>
          </TabsList>
          {Object.entries(mockData).map(([period, data]) => (
            <TabsContent key={period} value={period}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis 
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${formatCurrency(value)}`, "Gasto"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#6366F1"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};