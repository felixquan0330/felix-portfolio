import { auth } from "@/auth";
import { googleSignIn } from "@/lib/actions";
import UserMenu from "@/components/UserMenu";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return <UserMenu name={session.user.name ?? ""} image={session.user.image ?? ""} />;
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