import ClassRoom from './0-classroom';

export default function initializeRooms(){
  lists = [19,20,34];
  value = [];
  for(list of lists){
    list = new ClassRoom(list)
    value.push(list);
  }
  return [value];
}
