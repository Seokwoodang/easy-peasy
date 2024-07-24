import supabase from "@/supabase/supabaseClient";
import { useState } from "react";

export default function ChattingPage() {
  const [step, setStep] = useState(1);
  // Create a function to handle inserts
  const handleInserts = () => {
    console.log("Change received!");
  };

  // Listen to inserts
  // supabase
  //   .channel('CHAT-DATA')
  //   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, handleInserts)
  //   .subscribe()

  const channelOn = () => {
    // supabase.channel('room1').on('')
  };

  return (
    <div>
      <div>채팅페이지</div>
    </div>
  );
}
