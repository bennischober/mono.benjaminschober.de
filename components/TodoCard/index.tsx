import {
    Card,
    Text,
    Badge,
    Button,
    Group,
    useMantineTheme,
} from "@mantine/core";
import { useRouter } from "next/router";
import { TodoCardProps } from "../../types/interfaces";

export default function TodoCard({ todo }: TodoCardProps) {
    const router = useRouter();
    const theme = useMantineTheme();

    const secondaryColor =
        theme.colorScheme === "dark"
            ? theme.colors.dark[1]
            : theme.colors.gray[7];

    const handleCompleteData = () => {
        router.push("/todo/" + todo.meta.postid);
    };

    //https://www.npmjs.com/package/isomorphic-dompurify
    return (
        <div style={{ width: 340, margin: "auto" }}>
            <Card shadow="sm" p="lg">
                <Group
                    position="apart"
                    style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                    <Text weight={500}>{todo.content.title}</Text>
                    <Badge color="pink" variant="light">
                        {todo.meta.type}
                    </Badge>
                </Group>

                <Text
                    size="sm"
                    style={{ color: secondaryColor, lineHeight: 1.5 }}
                    dangerouslySetInnerHTML={{ __html: todo.content.text }}
                ></Text>

                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    style={{ marginTop: 14 }}
                    onClick={handleCompleteData}
                >
                    Display complete data
                </Button>
            </Card>
        </div>
    );
}
