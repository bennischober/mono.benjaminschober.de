import React from "react";
import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
} from "@mantine/core";
import { MdChevronRight } from "react-icons/md";
import { getMenuButtonHover, getNameInitials } from "../../utils/appHandles";
import { UserButtonProps } from "../../types/interfaces";

const useStyles = createStyles((theme) => ({
    user: {
        display: "block",
        width: "100%",
        padding: theme.spacing.md,
        color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
            backgroundColor: getMenuButtonHover(theme),
        },
    },
}));

export function UserButton({ image, name, email, color }: UserButtonProps) {
    const { classes } = useStyles();

    const iniitalsFallback = getNameInitials(name);
    if (!color) color = "blue";

    return (
        <UnstyledButton className={classes.user}>
            <Group>
                <Avatar src={image} alt={name} color={color} radius="xl">
                    {iniitalsFallback}
                </Avatar>

                <div style={{ flex: 1 }}>
                    <Text size="sm" weight={500}>
                        {name}
                    </Text>

                    <Text color="dimmed" size="xs">
                        {email}
                    </Text>
                </div>

                <MdChevronRight size={14} />
            </Group>
        </UnstyledButton>
    );
}
