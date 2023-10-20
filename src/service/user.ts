import { client } from './sanity';

type oAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};
export async function addUser({ id, username, name, email, image }: oAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    image,
    name,
    following: [],
    followers: [],
    bookmarks: [],
  });
}
