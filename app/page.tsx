"use client";

import {
  TestDataType,
  getTestData,
  insertTestData,
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
        hehe
      </button>
    </main>
  );
}
