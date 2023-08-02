import {
  AppShell,
  Footer,
  Group,
  Header,
  Text,
} from "@mantine/core"
import Logo from "../assets/Logo.svg";

export const ApplicationContainer = ({children}) => {
  return(
      <AppShell
      styles={{
          main: {
              background: '#FFFFFF',
              width: "100vw",
              height: "100vh",
              paddingLeft: '0px',
          }
      }}
      fixed
      footer={
          <Footer height={60} p="md">
              <Group position="apart" spacing="xl">
                  <Text size="sm"><span style={{fontWeight: "bolder"}}
                  >🕛 List Time: </span>0h 25m</Text>
                  <Text size="sm"><span style={{fontWeight: "bolder"}}
                  >🎆 End Time: </span>5:36pm</Text>
              </Group>
          </Footer>
      }
      header={
          <Header height={60} p="md">
          <Group position="apart" spacing="xl">
              <div>
              <Logo/>
              </div>

              <ul>
                <li><a href="#"> </a></li>
                <li><a href="#"> </a></li>
                <li><a href="#"> </a></li>
              </ul>
              </Group>
          </Header>
      }

      >
        {children}
      </AppShell>
  )
}
