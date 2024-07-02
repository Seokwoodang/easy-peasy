"use client";

import {
  TestDataType,
  deleteTestData,
  getTestData,
  insertTestData,
  updateTestData,
} from "@/action/test-action";
import { useEffect, useState } from "react";

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {test?.map((value) => {
          return <div key={value.id}>{value.id}</div>;
        })}
      </div>
      <button
        onClick={() => {
          insertTestData({ hello: false, testTwo: "hello" });
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
            id: "43f53aec-164c-4683-a5d9-8fc4305d2cea",
          });
        }}
      >
        delete
      </button>
    </main>
  );
}
