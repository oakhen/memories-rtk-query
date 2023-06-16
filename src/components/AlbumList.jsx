import { useFetchMyAlbumsQuery, useAddmyAlbumMutation } from "../store"
import AlbumListItem from "./AlbumListItem"
import Button from "./Button"
import Skeleton from "./Skeleton"

const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchMyAlbumsQuery(user)

  const [addmyAlbum, result] = useAddmyAlbumMutation()

  let content
  if (isLoading) {
    content = <Skeleton times={3} />
  }
  if (error) {
    content = <p>{error.message}</p>
  }
  if (data) {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />
    })
  }
  return (
    <div className="max-w-xl mx-auto">
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold ">Album For {user.name}</h3>
        <div>
          <Button
            loading={result.isLoading}
            onClick={() => addmyAlbum(user.id)}
          >
            Add Album
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </div>
  )
}
export default AlbumList
