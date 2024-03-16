import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPostAPI } from "../../api/apiFunctions";

const CreatePostForm = () => {
  const [info, setInfo] = useState({
    title: "",
    content: "",
    published: false,
  });

  const navigate = useNavigate();

  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  const handleCheckBox = () => {
    setInfo({ ...info, ["published"]: !info.published });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await createPostAPI(info, token);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
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
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default CreatePostForm;
