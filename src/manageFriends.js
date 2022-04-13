export function manageFriends(state, action) {
  const {type, payload} = action;

  switch(type){
    case 'friends/add':
      return {friends: [...state.friends, payload]}
    
    case 'friends/remove':
      return {friends: state.friends.filter(friend => friend.id !== payload)}

    default:
      return state
  }
}
