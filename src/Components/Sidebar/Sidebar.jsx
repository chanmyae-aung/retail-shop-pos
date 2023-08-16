import { AppShell, Navbar, Header } from "@mantine/core";
import NavBar from "./NavBar";
import SidebarItems from "./SidebarItems";

export default function Sidebar({ children }) {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={1000} p="xs" bg={"#161618"}>
          {<SidebarItems />}
        </Navbar>
      }
      header={
        <Header
          style={{
            borderBlockColor: "#3f4245",
          }}
          bg={"#3F4245"}
          height={60}
          p="xs"
        >
          {<NavBar />}
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
