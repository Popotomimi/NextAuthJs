import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav>
      <Link href="/">Home</Link>
      <div>
        {session && session.user ? (
          // logado
          <div>
            {/* login social => name, email, image */}
            <p>{session.user.name}</p>
          </div>
        ) : (
          //deslogado
          <form
            action={async () => {
              "use server";
              await signIn();
            }}>
            <button>Entrar</button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
