import { reducers } from "./reducers/reducers";

const { createStore } = require("redux");

const store = createStore(reducers)

export default store