import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-bold">
        Home
      </Link>
      <div>
        {session && session.user ? (
          // logado
          <div className="flex gap-4 items-center">
            {/* login social => name, email, image */}
            <p>{session.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Sair
              </button>
            </form>
          </div>
        ) : (
          //deslogado
          <form
            action={async () => {
              "use server";
              await signIn();
            }}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Entrar
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
