"use client";

import {
  TestDataType,
  deleteTestData,
  getTestData,
  insertTestData,
  updateTestData,
} from "@/action/test-action";
import { createClient } from "@/supabase/server";
import { useEffect, useState } from "react";
import { getServiceData, postingPost } from "./test";

export default function Home() {
  const [test, setTest] = useState<TestDataType[] | null>();

  useEffect(() => {
    getTestData()
      .then((data) => {
        setTest(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async () => {
    try {
      const result = await postingPost({ hello: false, testTwo: "hedddddllo" });
      console.log("Post created successfully:", result);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  useEffect(() => {
    const aa = async () => {
      const data = await getServiceData();
    };

    aa();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {test?.map((value) => {
          return <div key={value.id}>{value.id}</div>;
        })}
      </div>
      <button
        onClick={() => {
          // insertTestData({ hello: false, testTwo: "hedddddllo" });
          handleSubmit();
        }}
      >
        insert
      </button>
      <button
        onClick={() => {
          updateTestData({
            id: "43f53aec-164c-4683-a5d9-8fc4305d2cea",
            hello: false,
            testTwo: "update",
          });
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          deleteTestData({
            id: "e35753bb-493c-4692-81a2-00a6ef7a5c30",
          });
        }}
      >
        delete
      </button>
    </main>
  );
}
