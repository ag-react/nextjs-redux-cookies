import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../store/post/postActions";

export default function IndexPage() {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  // useEffect(() => {
  //   dispatch(fetchPost(1));
  // }, []);

  return (
    <div>
      Hello World. <pre>{JSON.stringify(post)}</pre>
    </div>
  );
}
