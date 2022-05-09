import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { Grid } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import axios from "axios";
import { PageTemplate } from "../../components/PageTemplate";
import { TodoPageProps } from "../../types/interfaces";
import TodoCard from "../../components/TodoCard";
import getLinks from "../../lib/links";

export default function TodoPage({ session, todos }: TodoPageProps) {
    const links = getLinks();
    const router = useRouter();
    const [todoData, setTodoData] = useState<JSX.Element[]>([]);

    const [pageTitle, setPageTitle] = useState("ToDos");
    useDocumentTitle(pageTitle);

    useEffect(() => {
        if (router && router.query) {
            handleSession();
        }

        if (window && document) {
            setPageTitle(document.title + " | " + window.location.hostname);
        }

        loadTodos();
    }, [router]);

    const handleSession = () => {
        if ((session && session.status === "unathorized") || !session) {
            router.push({
                pathname: links.user.login,
                query: { from: router.pathname },
            });
        }
    };

    const loadTodos = async () => {
        if (!todos || todos.length === 0) return;
        const val = todos.map((value) => {
            return (
                <Grid.Col md={6} lg={3} key={value.meta.postid}>
                    <TodoCard todo={value} />
                </Grid.Col>
            );
        });
        setTodoData(val);
    };

    return (
        <PageTemplate title={pageTitle}>
            <Grid>{todoData}</Grid>
        </PageTemplate>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    const todos = session
        ? await axios.get("http://localhost:3000/api/users/todos", {
              params: {
                  userid: session?.userid,
              },
          })
        : null;

    return {
        props: {
            session: session,
            todos: todos?.data.todos,
        },
    };
};
