// Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `there are ${numUsersOnline} oneline now`;
  }
  return "'Nobody's here. :("
}


