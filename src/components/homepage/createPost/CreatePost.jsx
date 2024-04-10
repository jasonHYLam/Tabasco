import { useState } from "react";
import { useForm } from "react-hook-form";
import { fetchData, fetchDataWithImage } from "../../../helper/helperUtils";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imagesToUpload, setImagesToUpload] = useState(null);

  function selectImage(e) {
    setImagesToUpload(e.target.files[0]);
  }

  async function post(data) {
    if (imagesToUpload) {
      const postData = new FormData();
      postData.append("images", imagesToUpload);
      postData.append("text", data.text);

      const postResponse = await fetchDataWithImage(
        `post/create_post_with_image`,
        "POST",
        postData
      );
      if (!postResponse.ok || postResponse instanceof Error) {
        navigate("/error");
      } else {
        const { newPost } = await postResponse.json();
        navigate(`/posts/${newPost.id}`);
      }
    } else {
      const postData = JSON.stringify(data);
      const postResponse = await fetchData(
        "post/create_post",
        "POST",
        postData
      );
      if (!postResponse.ok || postResponse instanceof Error) {
        navigate("/error");
      } else {
        const { newPost } = await postResponse.json();
        navigate(`/posts/${newPost.id}`);
      }
    }
  }

  if (errors) console.log(errors);

  return (
    <main>
      <p>it's me createPost</p>
      <form encType="multipart/form-data" onSubmit={handleSubmit(post)}>
        <input type="file" onChange={selectImage} />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          {...register("text", { required: true })}
        ></textarea>
        <input type="submit" value="Post" />
      </form>
    </main>
  );
}
