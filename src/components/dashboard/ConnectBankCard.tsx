import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

export const ConnectBankCard = () => {
  const handleConnect = () => {
    toast.info("Funcionalidad de conexión bancaria en desarrollo");
  };

  return (
    <Card className="bg-dashboard-card border-none">
      <CardHeader>
        <CardTitle className="text-dashboard-text">Conectar Banco</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleConnect}
          className="w-full bg-dashboard-accent hover:bg-primary-hover"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Agregar Banco
        </Button>
      </CardContent>
    </Card>
  );
};