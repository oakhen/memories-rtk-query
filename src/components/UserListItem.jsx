import { useDispatch } from "react-redux"
import { removeUser } from "../store"
import { GoTrashcan } from "react-icons/go"
import { dispatchThunk } from "../hooks/dispatch-thunk"
import Button from "./Button"
import Expandable from "./Expandable"
import AlbumList from "./AlbumList"

const UserListItem = ({ user }) => {
  const [removeThunk, isloading, errorMsg] = dispatchThunk(removeUser)
  const dispatch = useDispatch()
  const header = (
    <>
      <Button
        loading={isloading}
        className="mr-3"
        onClick={() => removeThunk(user.id)}
      >
        <GoTrashcan />
      </Button>
      {errorMsg && "Error deleting user..."}
      {user.name}
    </>
  )
  return (
    <Expandable header={header}>
      <AlbumList user={user} />{" "}
    </Expandable>
  )
}
export default UserListItem
