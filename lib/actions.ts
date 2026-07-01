"use server";

import { signIn, signOut } from "@/auth";

export async function googleSignIn() {
  await signIn("google");
}

export async function googleSignOut() {
  await signOut();
}