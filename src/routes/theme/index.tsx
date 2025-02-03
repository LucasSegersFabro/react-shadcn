import { useTheme } from "@/components/providers/theme.provider";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/theme/")({
  component: ThemePage,
});

function ThemePage() {
  const { setTheme } = useTheme();

  return (
    <div className="">
      <h1>1. Theme switch!</h1>
      <p className="p-2">
        1. Implementar alguma funcionalidade para "lembrar" o tema escolhido
        pelo usuário (deve manter após recarregar a tela)
      </p>
      <p className="p-2">2. (bonus): corrigir problemas de tema encontrados</p>
      <div className="mt-5">
        <Button onClick={() => setTheme("light")} color="white">
          Light
        </Button>
        <Button onClick={() => setTheme("dark")} color="primary">
          Dark
        </Button>
      </div>
    </div>
  );
}
