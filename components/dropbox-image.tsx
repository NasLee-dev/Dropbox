import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col p-4 border-gray-100 rounded-2xl shadow-md gap-2">
      {/* image */}
      <div>
        <img 
          src="/images/cutedog.jpg"
          className="w-full aspect-square rounded-2xl"
        />
      </div>
      {/* file name */}
      <div>
        <p className="text-sm font-bold">
          cutedog.jpg
        </p>
      </div>
      <div className="absolute top-4 right-4">
        <IconButton
          onClick={() => {}}
          color="red"
        >
          <i 
            className="fas fa-trash"
          />
        </IconButton>
      </div>
    </div>
  )
}