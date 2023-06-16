import { useFetchMyPhotosQuery, useAddmyPhotoMutation } from "../store"
import Button from "./Button"
import PhotoListItem from "./PhotoListItem"
import Skeleton from "./Skeleton"

function PhotoList({ album }) {
  const { data, error, isLoading } = useFetchMyPhotosQuery(album)
  const [addmyPhoto, result] = useAddmyPhotoMutation()

  let content
  if (isLoading) {
    console.log(data)
    content = <Skeleton times={3} />
  }
  if (error) {
    content = <p>{error.message}</p>
  }
  if (data) {
    content = data.map((photo) => {
      return (
        <div key={photo.id}>
          <PhotoListItem photo={photo} />
        </div>
      )
    })
  }
  return (
    <div className="max-w-xl mx-auto">
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold ">Photos in {album.title} </h3>
        <div>
          <Button
            loading={result.isLoading}
            onClick={() => addmyPhoto(album.id)}
          >
            +Add Photos
          </Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-2 ">
        {content}
      </div>
    </div>
  )
}
export default PhotoList

/* first let's do the crud operation and then the sanetization3 */
