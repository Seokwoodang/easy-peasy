"use server";

import { createClient } from "@/supabase/server";
// import supabase from "@/supabase/supabaseClient";
import { Tables } from "@/types/supabase";

export type TestDataType = Tables<"TEST-DATA">;

export const getTestData = async (): Promise<TestDataType[] | null> => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("TEST-DATA").select("*");
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
}) => {
  const supabase = createClient();
  try {
    const data = await supabase.from("TEST-DATA").insert({
      testTwo,
      hello,
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateTestData = async ({
  id,
  testTwo,
  hello,
}: {
  id: string;
  testTwo: string;
  hello: boolean;
}) => {
  const supabase = createClient();
  try {
    const data = await supabase
      .from("TEST-DATA")
      .update({
        testTwo,
        hello,
      })
      .eq("id", id);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteTestData = async ({ id }: { id: string }) => {
  const supabase = createClient();
  try {
    const data = await supabase.from("TEST-DATA").delete().eq("id", id);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
