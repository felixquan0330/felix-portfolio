import { auth } from "@/auth";
import { googleSignIn, googleSignOut } from "@/lib/actions";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex items-center gap-2 pl-2">
        {session.user.image && (
          <img
            src={session.user.image}
            alt={session.user.name ?? "User"}
            className="w-7 h-7 rounded-full"
          />
        )}
        <span className="text-sm text-gray-300 hidden sm:inline">
          {session.user.name}
        </span>
        <form action={googleSignOut}>
          <button
            type="submit"
            className="text-sm font-medium px-3 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Sign out
          </button>
        </form>
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