import PostForm from 'components/Post/PostForm';
import { useAddPostMutation } from 'redux/posts/postsApiSlice';

const AddPosts = () => {
  const [addPost] = useAddPostMutation();

  const submitPost = async data => {
    const { data: mewD } = await addPost(data);
    console.log(mewD);
  };

  return (
    <>
      This is page add Posts
      <PostForm submitPost={submitPost} />
    </>
  );
};

export default AddPosts;
