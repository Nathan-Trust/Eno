import {
  Cog,
  FileSpreadsheet,
  House,
  MessageCircleDashed,
  Users,
} from "lucide-react";
import { Eno_Routes } from "./route";
import { SidebarItems } from "@/models/shared";

export const sidebarItems: SidebarItems = {
  theme: [
    {
      title: "",
      links: [
        {
          label: "Overview",
          href: Eno_Routes.dashboard,
          icon: House,
        },
        {
          label: "Accounts",
          href: Eno_Routes.accounts,
          icon: Users,
          children: [
            {
              label: "Users",
              href: Eno_Routes.users,
            },
            {
              label: "Companies",
              href: Eno_Routes.companies,
            },
          ],
        },
        {
          label: "Projects",
          href: Eno_Routes.projects,
          icon: FileSpreadsheet,
        },
      ],
    },
    {
      title: "Messaging",
      links: [
        {
          label: "Messaging",
          href: Eno_Routes.messaging,
          icon: MessageCircleDashed,
        },
        {
          label: "Settings",
          href: Eno_Routes.settings,
          icon: Cog,
        },
      ],
    },
  ],
};
