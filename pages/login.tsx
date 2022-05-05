import { GetServerSideProps } from "next";
import { signIn, signOut, getSession, GetSessionParams } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

interface LoginPageProps {
    session: GetSessionParams;
}

export default function LoginPage({ session }: LoginPageProps) {
    const router = useRouter();

    useEffect(() => {
        if (router && router.query) {
            handleSession("/");
        }
    }, [router]);

    const handleLogin = () => {
        signIn("credentials", {
            username: "admin@admin",
            password: "test123",
        });
    };

    const handleLogout = () => {
        signOut();
    };

    const handleSession = (redirect: string) => {
        if (session && router.query && router.query.from) {
            //router?.push(router.query.from);
            console.log(redirect, router, session);
        }
    };

    if (session) {
        return (
            <>
                You are signed in <br />
                <button onClick={() => handleLogout()}>Log out</button>
            </>
        );
    }

    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor<"a">
                    href="#"
                    size="sm"
                    onClick={(event) => event.preventDefault()}
                >
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="Email"
                    placeholder="you@mantine.dev"
                    required
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                />
                <Group position="apart" mt="md">
                    <Checkbox label="Remember me" />
                    <Anchor<"a">
                        onClick={(event) => event.preventDefault()}
                        href="#"
                        size="sm"
                    >
                        Forgot password?
                    </Anchor>
                </Group>
                <Button onClick={() => handleLogin()} fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            session: await getSession(context),
        },
    };
};
