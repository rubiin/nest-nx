import { AppShell } from "@mantine/core";

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
    <AppShell
    header={<HeaderMegaMenu />} footer={<FooterLinks data={data} />}>
      <main>{children}</main>
    </AppShell>
  );
};

export default AppContainer;
