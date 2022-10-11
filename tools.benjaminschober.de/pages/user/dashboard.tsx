import { useDocumentTitle } from "@mantine/hooks";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageTemplate } from "../../components/PageTemplate";
import { LoginPageProps } from "../../types/interfaces";

export default function UserDashboardPage({ session }: LoginPageProps) {
    const router = useRouter();

    const [pageTitle, setPageTitle] = useState("Dashboard");
    useDocumentTitle(pageTitle);

    useEffect(() => {
        if (router && router.query) {
            handleSession();
        }

        if (window && document) {
            setPageTitle(document.title + " | " + window.location.hostname);
        }
    }, [router]);

    const handleSession = () => {
        if ((session && session.status === "unathorized") || !session) {
            router.push({
                pathname: "/auth/login",
                query: { from: router.pathname },
            });
        }
    };

    return (
        <PageTemplate title={pageTitle}>
            <div>
                Hi, you are logged in! Your data: {session?.expires},{" "}
                {session?.id}, {session?.status}, {session?.user?.email},{" "}
                {session?.user?.name}, {session?.userid}
            </div>
        </PageTemplate>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            session: await getSession(context),
        },
    };
};
