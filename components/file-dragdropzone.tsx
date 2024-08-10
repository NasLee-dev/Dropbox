'use client'
export default function FileDragDropZone() {
  return (
    <section className="w-full py-20 border-2 border-dotted border-indigo-700 flex items-center justify-center flex-col">
      <input 
        type="file"
      />
      <p>
        파일을 여기에 끌어다 놓거나 클릭하여 파일을 업로드하세요.
      </p>
    </section>
  )
}