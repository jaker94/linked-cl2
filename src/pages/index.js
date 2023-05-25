import { signOut } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Feed from "../components/Feed";
import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import { connectToDatabase } from "../util/mongodb";
// import { connectToDatabase } from "../util/mongodb";

export default function Home({ posts }) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/home");
    },
  });

  return (
    <div
      className="bg-[#f3f2ef] dark:bg-black dark:text-white h-screen
    overflow-y-scroll md:space-y-6"
    >
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main className="flex justify-center gap-x-4 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          <Feed posts={posts}/>
        </div>
        {/* widget */}
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

    // Get Google News API
    //Get posts on SSR
    const { db } = await connectToDatabase();
    const posts = await db
      .collection("posts")
      .find()
      .sort({ timestamp: -1 })
      .toArray();
  

  return {
    props: {
      session,
      posts: posts.map((post) => ({
        _id: post._id.toString(),
        input: post.input,
      photoUrl: post.photoUrl,
       username: post.username,
      email: post.email,
       userImg: post.userImg,
      createdAt: post.createdAt
      }))
    },
  };
}