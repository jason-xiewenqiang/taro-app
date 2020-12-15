import { v4 as uuidv4 } from "uuid";
export const users = [
  { name: "张三0", position: "董事长", id: uuidv4(), icon: require("../assets/user.png") },
  { name: "张三1", position: "董事长", id: uuidv4(), icon: require("../assets/user.png") },
  { name: "张三2", position: "董事长", id: uuidv4(), icon: require("../assets/user.png") },
  { name: "张三3", position: "董事长", id: uuidv4(), icon: require("../assets/user.png") },
  { name: "张三4", position: "董事长", id: uuidv4(), icon: require("../assets/user.png") },
  { name: "张三5", position: "董事长", id: uuidv4(), icon: require("../assets/user.png") },
]
export const deparments = [
  { name: "华南部门0", count: 12, id: uuidv4(), icon: require("../assets/folder.png") },
  { name: "华南部门1", count: 12, id: uuidv4(), icon: require("../assets/folder.png") },
  { name: "华南部门2", count: 12, id: uuidv4(), icon: require("../assets/folder.png") },
  { name: "华南部门3", count: 12, id: uuidv4(), icon: require("../assets/folder.png") },
  { name: "华南部门4", count: 12, id: uuidv4(), icon: require("../assets/folder.png") },
  { name: "华南部门5", count: 12, id: uuidv4(), icon: require("../assets/folder.png") },
]
export default {}