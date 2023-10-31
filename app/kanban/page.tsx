import { createClient } from '@/utils/supabase/server';

export const dynamic = "force-dynamic";

export default async function Kanban() {
  const supabase = createClient();
  const { data: kanban } = await supabase.from("kanban").select();

  return <pre>{JSON.stringify(kanban, null, 2)}</pre>
}