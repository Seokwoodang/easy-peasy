import supabase from "@/supabase/supabaseClient";

export default function ChattingPage() {
  // Create a function to handle inserts
  const handleInserts = (payload) => {
    console.log("Change received!", payload);
  };

  // Listen to inserts
  // supabase
  //   .channel('CHAT-DATA')
  //   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, handleInserts)
  //   .subscribe()

  const channelOn = () => {
    // supabase.channel('room1').on('')
  };

  return <div>채팅페이지 입니당</div>;
}
