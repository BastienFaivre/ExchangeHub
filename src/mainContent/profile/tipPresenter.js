import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function TipPresenter() {
    const dispatch = useDispatch()
    const { tips, form } = useSelector((state) => state.profile)

    function setEditTipCommentACB() {}

    return <></>
}
