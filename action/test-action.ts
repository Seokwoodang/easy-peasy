"use server";

import supabase from "@/supabase/supabaseClient";
import { Tables } from "@/types/supabase";

export type TestDataType = Tables<"TEST-DATA">;

export const getTestData = async (): Promise<TestDataType[] | null> => {
  try {
    const { data } = await supabase
      .from("TEST-DATA")
      .select("*")
      .eq("testTwo", "blabla");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const insertTestData = async ({
  testTwo,
  hello,
}: {
  testTwo: string;
  hello: boolean;
}): Promise<TestDataType[] | null> => {
  const { data } = await supabase.from("TEST-DATA").insert({
    testTwo,
    hello,
  });

  return data;
};
