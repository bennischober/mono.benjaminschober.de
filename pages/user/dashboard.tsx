import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoginPageProps } from "../../types/interfaces";

export default function UserDashboardPage({ session }: LoginPageProps) {
    const router = useRouter();

    useEffect(() => {
        if (router && router.query) {
            handleSession();
        }
    }, [router]);

    const handleSession = () => {
        if ((session && session.status === "unathorized") || !session) {
            router.push({
                pathname: "/login",
                query: { from: router.pathname },
            });
        }
    };

    return <div>Hi, you are logged in! Your data: {session.expires}, {session.id}, {session.status}, {session.user?.email}, {session.user?.name}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            session: await getSession(context),
        },
    };
};
