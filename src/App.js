import React from 'react';
import Profile from './componens/Profile/Profile';
import Stats from './componens/Stats/Stats';
import FriendList from './componens/FriendList/FriendList';
import img from './componens/Profile/avatar.png';
import friends from './Date/friends.json';
import TransactionHistory from './componens/TransactionHistory/TransactionHistory';
import transactions from './Date/transactions.json';

const user = {
  name: 'Timothy Grant',
  tag: '@tgrant',
  location: 'Sao Paulo, Brazil',
  avatar: img,
  stats: {
    followers: 198,
    views: 3685,
    likes: 492,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

function App() {
  return (
    <div>
      <Profile user={user} />
      <Stats stats={stats} friends={friends} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
export default App;
