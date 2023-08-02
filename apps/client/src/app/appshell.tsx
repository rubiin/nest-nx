import { AppShell, Container } from "@mantine/core";

import {FooterLinks} from "../components/Footer";
import {HeaderMegaMenu} from "../components/Header";

const data = [{
  title: "Resources",
  links: [
    { label: "Getting started", link: "/getting-started" },
    { label: "Documentation", link: "/documentation" },
    { label: "Components", link: "/components" },
    { label: "Blog", link: "/blog" },

  ]}]

const AppContainer = ({ children }) => {
  return (
    <div>
    <AppShell header={<HeaderMegaMenu />} footer={<FooterLinks data={data} />}>
      <Container size="sm">{children}</Container>
    </AppShell>
    </div>
  );
};

export default AppContainer;
