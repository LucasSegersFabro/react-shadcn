import { SideMenu } from "@/components/internal/sidemenu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <SideMenu />
      <div className="flex-1 flex flex-col">
        <SidebarTrigger />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
