import { createFileRoute } from "@tanstack/react-router";
import { PaymentsTable } from "./-components/paymenttable/table";
import { columns } from "./-components/paymenttable/columns";
import { usePaymentsTable } from "./-components/paymenttable/hooks";

export const Route = createFileRoute("/table/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = usePaymentsTable();

  return (
    <div>
      <h1>2. Table Performance</h1>
      <p className="p-2">1. A performance está bem ruim. Como melhorar? 🤔</p>
      <p className="p-2">
        2. Bora tentar implementar uma caixa de texto que busque (fuzzy) por
        status ou email?
      </p>

      <div className="p-2">
        <PaymentsTable columns={columns} data={data ?? []} />
      </div>
    </div>
  );
}
