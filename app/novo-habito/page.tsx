function NewHabit() {
  async function NewHabit(formData: FormData){
    "use server";

    const habit = formData.get("habit");

    console.log(habit)
    
  }
  return(
    <main className="container relative flex flex-col gap-8 px-12 pt-16 ">
      <h1 className=" text-4xl font-light text-white font-display text-center">Novo Hábito</h1>
      <form action={NewHabit} className="flex flex-col gap-4 mt-4">
        <input type="text" name="habit" id="habit" className="p-2 font-sans text-xl rounded-md bg-neutral-800" />
        <button type="submit" className="bg-[#45EDAD] text-neutral-800 font-display font-regular text-2xl p-2 mt-8 rounded-md">Cadastrar</button>
        <button className="bg-neutral-800 text-red-500 font-display font-regular text-2xl p-2 rounded-md">Cancelar</button>
      </form>
    </main>
  )
}
export default NewHabit