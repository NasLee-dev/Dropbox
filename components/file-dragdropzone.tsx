'use client'

import { Button } from "@material-tailwind/react"
import { useMutation } from "@tanstack/react-query"
import { uploadFile } from "actions/storageActions"
import { queryClient } from "config/ReactQueryClientProvider"
import { useRef } from "react"

export default function FileDragDropZone() {
  const fileRef = useRef(null)
  const uploadImage = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      })
    }
  })
  return (
    <form className="w-full py-20 border-2 border-dotted border-indigo-700 flex items-center justify-center flex-col"
      onSubmit={async (e) => {
        e.preventDefault()
        const file = fileRef.current.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          const result = await uploadImage.mutate(formData);
        }
      }}
    >
      <input 
        type="file"
        ref={fileRef}
      />
      <p>
        파일을 여기에 끌어다 놓거나 클릭하여 파일을 업로드하세요.
      </p>
      <Button
        loading={uploadImage.isPending}
        type="submit"
      >
        파일 업로드
      </Button>
    </form>
  )
}
