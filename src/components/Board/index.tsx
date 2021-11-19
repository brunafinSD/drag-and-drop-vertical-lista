import { List } from "../List";
import './styles.scss';
import {loadLists} from '../../services/api';

const lists = loadLists();

export function Board() {

  return (
    <div className="containerBoard">
      {lists.map(list => <List key={list.title} data={list}/>)}
    </div>
  );
}
