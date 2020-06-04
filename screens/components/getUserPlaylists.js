import getValidSPObj from './getValidSPObj'

const getUserPlaylists = async () => {
    const sp = await getValidSPObj();
    const { id: userId } = await sp.getMe();
    const { items: playlists } = await sp.getUserPlaylists(userId, { limit: 50 });
    console.log(test)
    return playlists;
  };

  export default getUserPlaylists