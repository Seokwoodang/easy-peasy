"use client";

import supabase from "@/supabase/supabaseClient";
import { useState } from "react";

export default function ChattingPage() {
  // Join a room/topic. Can be anything except for 'realtime'.
  const channelA = supabase.channel("room-1");

  // Simple function to log any messages we receive
  function messageReceived(payload) {
    console.log(payload);
  }

  // Subscribe to the Channel
  const channelBroadcast = () => {
    channelA
      .on("broadcast", { event: "test" }, (payload) => messageReceived(payload))
      .subscribe();
  };

  const channelJoin = () => {
    const channelB = supabase.channel("room-1");

    channelB.subscribe((status) => {
      // Wait for successful connection
      if (status !== "SUBSCRIBED") {
        return null;
      }

      // Send a message once the client is subscribed
      channelB.send({
        type: "broadcast",
        event: "test",
        payload: { message: "hello, world" },
      });
    });
  };

  return (
    <div>
      <div>채팅페이지</div>
      <div onClick={channelBroadcast}>채팅 생성</div>
      <div onClick={channelJoin}>채팅 참가</div>
    </div>
  );
}
