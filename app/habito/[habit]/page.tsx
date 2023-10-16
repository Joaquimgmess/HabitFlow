import ArrowIcon from "@/components/ArrowIcon";
import { kv } from "@vercel/kv";
import Link from "next/link";
import Calendar from "@/components/Calendar";
import { Habits } from "@/app/page";






async function Habit({params: {habit}} : { params: {habit: string}}) {
  const decodedHabit = decodeURI(habit);
  const habitStreak: Record<string, boolean> | null = await kv.hget("habits", decodedHabit);

  return(
  <main className="container relative flex flex-col gap-8 px-12 pt-16">
    <h1 className=" text-2xl font-light text-white font-display text-center">{decodedHabit}	</h1>
    <Link  className ="flex items-center font-sans text-xs text-neutral-300 text-center gap-1" href="/"> 
    <ArrowIcon className="" width={15} height={14} />
    Voltar 
    </Link>
    
    <Calendar habit= {decodedHabit} habitStreak= {habitStreak} />
  </main> 
  );
}

export default Habit