import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import FriendList from '../FriendList/FriendList';
import friends from '../../Date/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../Date/transactions.json';
import { user, stats } from '../../Date/AppDate';

const App = () => (
  <div>
    <Profile user={user} />
    <Stats stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
