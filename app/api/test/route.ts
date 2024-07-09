import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { testTwo, hello } = await request.json();
    const supabase = createClient();

    const { data, error } = await supabase.from("TEST-DATA").insert([
      {
        testTwo,
        hello,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "등록 성공" }, { status: 200 });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const INSERT = async ({
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
