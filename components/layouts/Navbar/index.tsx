import React, { useState } from 'react';
import {
    ActionIcon,
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import {TestFooter} from '../Footer';
import Link from 'next/link';
import { Sun, MoonStars } from 'tabler-icons-react';

export function NavbarNested(props:any) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Link href="/">Home</Link>
            <Link href="/pxtorem">GoTo PXToREM</Link>
          </Navbar>
        }
        header={
          <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
  
              <Text>Application header</Text>
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
            </div>
          </Header>
        }
      >
        {props.children}
        <TestFooter data={[{title: "Row 1", links: [{label: "link1", link: "https://www.google.com"}]}]}/>
      </AppShell>
    );
}
