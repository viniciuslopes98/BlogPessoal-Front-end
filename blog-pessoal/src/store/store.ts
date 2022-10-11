import { createStore } from "redux";
import { tokensReducer } from "./tokens/tokenReducer";

const store = createStore(tokensReducer)


export default store