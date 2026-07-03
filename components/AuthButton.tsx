import { auth } from "@/auth";
import { googleSignIn, googleSignOut } from "@/lib/actions";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex items-center pl-2">
        <form action={googleSignOut}>
          <button
            type="submit"
            className="text-sm font-medium px-2 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Sign out
          </button>
        </form>
        {session.user.image && (
          <img
            src={session.user.image}
            alt={session.user.name ?? "User"}
            className="w-8 h-8 rounded-full"
          />
        )}

      </div>
    );
  }

  return (
    <form action={googleSignIn}>
      <button
        type="submit"
        className="text-sm font-medium px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
      >
        Sign in
      </button>
    </form>
  );
}