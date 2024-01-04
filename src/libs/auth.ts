export const auth: Auth = {
  status: 'loggedOut',
  username: undefined,
  avatar: undefined,
  login: (username: string) => {
    // do some real auth here
    console.log('login');
    auth.status = 'loggedIn';
    auth.username = username;
    auth.avatar =
      'https://avatars.githubusercontent.com/u/1227139?v=4#a042581f4e29026704d';
  },
  logout: () => {
    // do some real logout
    console.log('logout');
    auth.status = 'loggedOut';
    auth.username = undefined;
  },
};

export type Auth = {
  login: (username: string) => void;
  logout: () => void;
  status: 'loggedOut' | 'loggedIn';
  username?: string;
  avatar?: string;
};
