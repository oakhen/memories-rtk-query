import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"

export const dispatchThunk = (thunk) => {
  const [isloading, setisloading] = useState(false)
  const [errorMsg, seterrorMsg] = useState(null)
  const dispatch = useDispatch()

  const runThunk = useCallback(
    (id) => {
      setisloading(true)
      dispatch(thunk(id))
        .unwrap()
        .catch((err) => seterrorMsg(err))
        .finally(() => setisloading(false))
    },
    [dispatch, thunk],
  )
  return [runThunk, isloading, errorMsg]
}
