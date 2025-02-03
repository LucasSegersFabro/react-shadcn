import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/form/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>3. Forms</h1>
      <p className="p-2">
        1. Implementar um form com os inputs: CNPJ, email, endereço (opcional)
      </p>
      <p className="p-2">2. deve ter validação de CNPJ</p>
      <p className="p-2">3. deve ter validação de email</p>
      <p className="p-2">
        4. simular uma mutation do react query (pode ser um alert mesmo)
      </p>
      <p className="p-2">
        5. criar uma subrota deste form que receba um ID (/form/$id) e funcione
        como uma tela de "Alteração", se possível com os mesmos componentes
      </p>

      <div className="p-2">Implemente aqui o seu form</div>
    </div>
  );
}
