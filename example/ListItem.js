import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const dummyData = [
    {
        id: 1,
        title: "dummy1",
        category: "dummyCategory1",
        isSelected: false
    },
    {
        id: 2,
        title: "dummy2",
        category: "dummyCategory2",
        isSelected: false
    },
    {
        id: 3,
        title: "dummy3",
        category: "dummyCategory3",
        isSelected: false
    },
    {
        id: 4,
        title: "dummy4",
        category: "dummyCategory4",
        isSelected: false
    },
    {
        id: 5,
        title: "dummy5",
        category: "dummyCategory5",
        isSelected: false
    }
];


const Item = ({id, title, category, isSelected}) => {
    return (
        <li>
           <motion.div layoutId={`item-motion-${id}`}>
                <Link to={`/${id}`}>
                    <div className="content">

                        <motion.div className="title-motion" layoutId={`title-motion-${id}`}>
                            <span className="category">{category}</span>
                            <h2 className="title">{title}</h2>
                        </motion.div>

                        {/* 첨보는거 나오면 검색 */}
                        <motion.div className="image-motion" layoutId={`image-motion-${id}`} aria-hidden="true">
                            <img className="image" src={`images/${id}.jpeg`} alt="" />
                        </motion.div>

                    </div>

                </Link>

           </motion.div>
        </li>

    )
}

const ListItem = ({selectedId}) => {
    return (
        <ul>
            {dummyData.map(item => (
                <Item key={item.id} {...item} isSelected={item.id === selectedId}/>
            ))}
        </ul>

    )
}


export default ListItem;