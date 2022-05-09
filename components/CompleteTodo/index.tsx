import {
    Paper,
    Space,
    Title,
    Text,
    Divider,
    Accordion,
    useMantineTheme,
    Badge,
    Grid,
} from "@mantine/core";
import dayjs from "dayjs";
import { Todo } from "../../types/interfaces";
import { getNumberBiggerThanX } from "../../utils/calculations";

export function CompleteTodo({ content, meta, date }: Todo) {
    const theme = useMantineTheme();

    const colors = Object.keys(theme.colors);

    const categories = meta.categories
        ? meta.categories?.map((value, index) => {
              return (
                  <Badge
                      key={value}
                      color={colors[getNumberBiggerThanX(index, 0)]}
                  >
                      {value}
                  </Badge>
              );
          })
        : null;

    const tags = meta.tags
        ? meta.tags.map((value, index) => {
              return (
                  <Badge
                      key={value}
                      color={
                          colors[
                              getNumberBiggerThanX(colors.length - 1 - index, 0)
                          ]
                      }
                  >
                      {value}
                  </Badge>
              );
          })
        : null;

    const dateParts = {
        create: date.create.split("T"),
        end: date.end?.split("T"),
    };

    const createDate = dayjs(dateParts.create[0]).format("DD/MM/YYYY");
    const endDate = dateParts.end
        ? dayjs(dateParts.end[0]).format("DD/MM/YYYY")
        : null;

    const dates = dateParts.end ? (
        <Grid>
            <Grid.Col span={6}>
                <Text>Created: {createDate}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
                <Text>End: {endDate}</Text>
            </Grid.Col>
        </Grid>
    ) : (
        <Text>Created: {createDate}</Text>
    );

    return (
        <Paper shadow="xl" p="xl" withBorder>
            <Title>{content.title}</Title>
            <Space p="md" />
            <Text>{content.text}</Text>
            <Space p="xl" />
            <Accordion offsetIcon={false}>
                <Accordion.Item label="Meta data">
                    <Accordion multiple>
                        <Accordion.Item label="Categories">
                            {categories}
                        </Accordion.Item>
                        <Accordion.Item label="Tags">{tags}</Accordion.Item>
                    </Accordion>
                    <Space p="md" />
                    {dates}
                </Accordion.Item>
            </Accordion>
        </Paper>
    );
}
