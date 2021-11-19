import { MdAdd, MdCheck } from "react-icons/md";
import { Card } from "../Card";
import "./styles.scss";

interface ICard {
    id: number;
    content?: string;
    user?: string;
    done?: undefined;
}

interface IList {
  data: {
    title: string;
    creatable: boolean;
    cards: ICard[];
    done?: boolean;
  };
}

export function List({ data }: IList) {
  return (
    <div className={`containerList ${data.done && `listDone`}`} >
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
        {data.done && (
          <MdCheck className="listDone__checked"/>
        )}
      </header>
      <ul>
        {data.cards.map(card => <Card key={card.id} data={card}/> )}
      </ul>
    </div>
  );
}
