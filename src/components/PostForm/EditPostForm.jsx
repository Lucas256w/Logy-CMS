import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostAPI, editPostAPI, deletePostAPI } from "../../api/apiFunctions";

const EditPostForm = () => {
  const [info, setInfo] = useState({
    title: "",
    content: "",
    published: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  // REQUEST TO GET POST INFO BASE ON ID
  useEffect(() => {
    const getPost = async (id) => {
      try {
        const result = await getPostAPI(id);
        setInfo({
          title: result.title,
          content: result.content,
          published: result.published,
        });
      } catch (error) {
        console.error("Fetehc failed: ", error);
      }
    };

    getPost(id);
  }, [id]);

  // FORM INPUT HANDLERS
  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  const handleCheckBox = () => {
    setInfo({ ...info, ["published"]: !info.published });
  };

  // REQUEST TO EDIT/DELETE POST
  const handleEdit = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await editPostAPI(info, id, token);
      if (result) {
        alert("Update sucessful");
      }
    } catch (error) {
      console.error("Update failed: ", error);
    }
  };

  const handleDelete = async () => {
    // Prompt the user to confirm deletion
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    // If the user clicks "OK", proceed with the deletion
    if (isConfirmed) {
      const token = localStorage.getItem("token");
      try {
        await deletePostAPI(id, token);
        navigate("/");
      } catch (error) {
        console.error("Delete failed: ", error);
      }
    }
    // If the user clicks "Cancel", do nothing
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Cancel</button>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          type="text"
          value={info.title}
          onChange={handleInfoChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <textarea
          name="content"
          value={info.content}
          cols="30"
          rows="10"
          onChange={handleInfoChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="published">Published: </label>
        <input
          name="published"
          type="checkbox"
          onChange={handleCheckBox}
          checked={info.published}
        />
      </div>
      <button onClick={handleEdit}>Confirm Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default EditPostForm;
