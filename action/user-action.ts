"use server";

import supabase from "@/supabase/supabaseClient";
import { Tables } from "@/types/supabase";

export type UserDataType = Tables<"USER-DATA">;

export async function getUserData() {
  const data = await supabase.from("TEST-DATA").select("*");
  return data;
}

export async function userSignup() {
  try {
  } catch (error) {
    console.log(error);
  }
}
