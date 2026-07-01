import { auth } from "@/auth";
import { googleSignIn, googleSignOut } from "@/lib/actions";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <form action={googleSignOut}>
        <span className="text-sm mr-3">Hi, {session.user.name}</span>
        <button type="submit" className="text-sm text-blue-600 hover:underline">
          Sign out
        </button>
      </form>
    );
  }

  return (
    <form action={googleSignIn}>
      <button type="submit" className="text-sm text-blue-600 hover:underline">
        Sign in
      </button>
    </form>
  );
}