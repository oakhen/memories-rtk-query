import { GoTrashcan } from "react-icons/go"
import Button from "./Button"
import Expandable from "./Expandable"
import { useRemoveAlbumMutation } from "../store"
import PhotoList from "./PhotoList"

export default function AlbumListItem({ album }) {
  const [remove, result] = useRemoveAlbumMutation()
  const header = (
    <div className="flex flex-row items-center gap-2 justify-between">
      <Button
        loading={result.isLoading}
        onClick={() => {
          remove(album)
        }}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  )

  return (
    <Expandable header={header}>
      <PhotoList album={album} />
    </Expandable>
  )
}
