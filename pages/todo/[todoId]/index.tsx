import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import axios from "axios";
import { Button, Container, Text } from "@mantine/core";
import { MdArrowBack } from "react-icons/md";
import getLinks from "../../../lib/links";
import { SpecificTodoPageProps } from "../../../types/interfaces";
import { PageTemplate } from "../../../components/PageTemplate";
import { CompleteTodo } from "../../../components/CompleteTodo";
import { getLastRoute } from "../../../utils/appHandles";

export default function CompleteTodoPage(props: SpecificTodoPageProps) {
    const router = useRouter();

    const goBack = () => {
        if (router.query && router.query.from) {
            router.push(getLastRoute(router));
            return;
        }
        router.push("/todo/");
    };

    return (
        <PageTemplate title={props.todos.content.title}>
            <Button
                leftIcon={<MdArrowBack />}
                variant="subtle"
                onClick={goBack}
            >
                <Text>Go back</Text>
            </Button>
            <Container>
                <CompleteTodo
                    user={props.todos.user}
                    content={props.todos.content}
                    date={props.todos.date}
                    meta={props.todos.meta}
                />
            </Container>
        </PageTemplate>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.query.todoId;
    const link = getLinks();

    const session = await getSession(context);
    const todos = await axios.get(
        link.root + "/api/users/todos/specific-todo",
        {
            params: {
                postid: id,
            },
        }
    );

    return {
        props: {
            session: session,
            todos: todos.data.todo,
        },
    };
};
