import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
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
  const { cards } = data;
  const [todo, setTodo] = useState(cards);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const items = Array.from(todo);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setTodo(items);
  };

  console.log("lista de cards", cards);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <div
            className={`containerList ${data.done && `listDone`}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <header>
              <h2>{data.title}</h2>
              {data.creatable && (
                <button type="button">
                  <MdAdd size={24} color="#FFF" />
                </button>
              )}
              {data.done && <MdCheck className="listDone__checked" />}
            </header>
            <ul>
              {todo.map((card, index) => (
                <Draggable key={card.id} draggableId={String(card.id)} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card key={card.id} data={card} />
                    </div>
                  )}
                </Draggable>
              ))}
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// <div className={`containerList ${data.done && `listDone`}`}>
// <header>
//   <h2>{data.title}</h2>
//   {data.creatable && (
//     <button type="button">
//       <MdAdd size={24} color="#FFF" />
//     </button>
//   )}
//   {data.done && <MdCheck className="listDone__checked" />}
// </header>
// <ul>
//   {data.cards.map((card) => (
//     <Card key={card.id} data={card} />
//   ))}
// </ul>
// </div>
