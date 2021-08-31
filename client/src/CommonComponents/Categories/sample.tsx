import React, { useEffect, useReducer, useState } from 'react';


export default function LearningComplexState () {

  const notesData = JSON.parse(localStorage.getItem("notes") || '[]')
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState<any>(notesData || []);
  const [body,setBody] = useState("");
//   const [notes, dispatch] = useReducer<any>(notesReducer, [])
// 
 const addNote = (e:any) => {
     if(e.target.value === ""){
         return
     }
     e.preventDefault();
     setNotes([
         ...notes,
         {
             title, body
         }
     ])
     setTitle("")
     setBody("")
 }

  const remove = (title:any) => {
   setNotes(notes.filter((note:any)=>note.title !== title))
  }

 console.log("saba",notes)
  useEffect(()=>{
      
    localStorage.setItem('notes', JSON.stringify(notes))
  })

  return (
      <div>
     <h1>learning complex state concept (NOTES)</h1>
     <p>Add a Note</p>
     {
         notes?.map((note:any, index:any)=>{
             return (
                 <div>
                     <h3>{note.title}</h3>
                     <p>{note.body}</p>
                     <button onClick={()=>remove(note.title)}>X</button>
                 </div>
             )
         })
     }
     <form onSubmit={addNote}>
         <input value={title} onChange={(e:any)=>setTitle(e.target.value)} />
         <textarea value={body} onChange={(e:any)=>setBody(e.target.value)}></textarea>
         <button> Add Note</button>
     </form>
   </div>
  );
}
