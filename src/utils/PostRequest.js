import ClientServer from "./ClientServer";

const PostRequest = async (path, data) => {
  try {
    const response = await ClientServer.post(path, data, {
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer This_is_the_bearer_key_so_stay_clear",
      },
    });
    return { ...response.data };
  } catch (error) {
    return { success: false, msg: error.message };
  }
};

export default PostRequest;
