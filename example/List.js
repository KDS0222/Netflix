import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// @ts-ignore
import { data } from "./../data";


/*
export const data = [
  // Photo by Heather Ford on Unsplash
  {
    id: "doughnut",
    category: "Doughnut",
    title: "今日のおやつはみんな大好きドーナツ",
    pointOfInterest: 80,
    backgroundColor: "#814A0E"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "waffle",
    category: "waffle",
    title: "ベルギーリエージュワッフル",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "brownie",
    category: "Brownie",
    title: "チョコブラウニーの作り方",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  }
];


*/

export interface ItemProps {
  id: string;
  title: string;
  category?: string | number;
  isSelected?: boolean;
}

const Item = ({ id, title, category, isSelected }: ItemProps) => {
  return (
    <li className="item">
      <motion.div layoutId={`item-motion-${id}`}>
        <Link to={`/${id}`} className="link">




          <div className="content">

            <motion.div
              className="title-motion"
              layoutId={`title-motion-${id}`}
            >
              <span className="category">{category}</span>
              <h2 className="title">{title}</h2>
            </motion.div>



            <motion.div
              className="image-motion"
              aria-hidden="true"
              layoutId={`image-motion-${id}`}
            >
              <img className="image" src={`images/${id}.jpeg`} alt="" />
            </motion.div>


          </div>






        </Link>
      </motion.div>
    </li>
  );
};

const List = ({ selectedId }: { selectedId: string }) => {
  return (
    <ul className="list">
      {data.map((item: ItemProps) => (
        <Item key={item.id} {...item} isSelected={item.id === selectedId} />
      ))}
    </ul>
  );
};

export default List;
