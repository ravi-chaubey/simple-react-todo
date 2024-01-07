import React, { useState } from 'react';
import FlexWrapper from '../ui/FlexWrapper';
import styles from './List.module.css'

function List({ listItems, onDelete, onEdit }) {
    const [completedItems, setCompletedItems] = useState([]);

    const toggleCompleted = (id) => {
        if (completedItems.includes(id)) {
            setCompletedItems(completedItems.filter(itemId => itemId !== id));
        } else {
            setCompletedItems([...completedItems, id]);
        }
    }

    const editHandler = (id) => {
        onEdit(id);
    }

    const deleteHandler = (id) => {
        onDelete(id);
    }

    return (
        <>
            {listItems.length > 0 ? (
                <ul className={styles.ul}>
                    {listItems.map((item) => (
                        <li
                            className={`${styles.li} ${completedItems.includes(item.id) ? styles.completed : ''}`}
                            key={item.id}
                        >
                            <FlexWrapper>
                                <span>{item.text}</span>
                                <FlexWrapper>
                                    <button type='button' onClick={() => toggleCompleted(item.id)}>✅</button>
                                    <button type='button' onClick={() => editHandler(item.id)}>✏️</button>
                                    <button type='button' onClick={() => deleteHandler(item.id)}>❌</button>
                                </FlexWrapper>
                            </FlexWrapper>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks added</p>
            )}
        </>
    );
}

export default List;
