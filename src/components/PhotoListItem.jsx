import { GoTrashcan } from "react-icons/go"
import { useRemovePhotoMutation } from "../store"

function PhotoListItem({ photo }) {
  const [removePhoto, result] = useRemovePhotoMutation()
  return (
    <div onClick={() => removePhoto(photo)} className="relative cursor-pointer">
      <img className="h-20 w-20 rounded-md shadow-lg" src={photo.url} />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  )
}
export default PhotoListItem

/* so yaha pe kuch chize naya hai jisko hum ache se sikh sakte hai. */
