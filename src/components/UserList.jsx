import { useDispatch, useSelector } from "react-redux"
import { addUser, fetchUsers, removeUser } from "../store"
import { useEffect } from "react"
import Skeleton from "./Skeleton"
import Button from "./Button"
import { dispatchThunk } from "../hooks/dispatch-thunk"
import UserListItem from "./UserListItem"

/* so hum custom hooks ka use karke isko automate kar denge */

const UserList = () => {
  const [fetchingThunk, isloading, errorMsg] = dispatchThunk(fetchUsers)
  const [creatingThunk, isCreatingUser, errorCreating] = dispatchThunk(addUser)

  const { data } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    fetchingThunk()
  }, [fetchingThunk])

  const handleAdduser = () => {
    creatingThunk()
  }

  let content
  if (isloading) {
    content = <Skeleton times={11} />
  } else if (errorMsg) {
    content = <div>{errorMsg}</div>
  } else {
    content = data.map((user) => <UserListItem key={user.id} user={user} />)
  }
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-row mx-auto justify-between items-center m-6">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleAdduser}>
          +Add User
        </Button>

        {errorCreating && "Error creating user..."}
      </div>
      {content}
    </div>
  )
}
export default UserList

/* kuch soch nai paa rahe hai samjh nai aa raha hai.  */

/* i thik that codium is not working here properly */
// gererate random user
