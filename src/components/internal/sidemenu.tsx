import { Home, Inbox, Table, Bug, FormInput } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Link } from "@tanstack/react-router";

const items = [
  {
    title: "Home",
    url: (
      <Link to="/">
        <Home /> Home
      </Link>
    ),
    icon: Home,
  },
  {
    title: "1. Theming",
    url: (
      <Link to="/theme">
        <Bug /> 1. Theme
      </Link>
    ),
    icon: Inbox,
  },
  {
    title: "2. Table",
    url: (
      <Link to="/table">
        <Table /> 2. Table
      </Link>
    ),
    icon: Inbox,
  },
  {
    title: "3. Forms",
    url: (
      <Link to="/form">
        <FormInput /> 3. Forms
      </Link>
    ),
    icon: Inbox,
  },
  //   {
  //     title: "Calendar",
  //     url: "#",
  //     icon: Calendar,
  //   },
  //   {
  //     title: "Search",
  //     url: "#",
  //     icon: Search,
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings,
  //   },
];

export function SideMenu() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>SplitC Frontend Test</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>{item.url}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
