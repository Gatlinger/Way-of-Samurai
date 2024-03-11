import './index.css';
import {state} from "./redux/state";
import { rerederEntireTree } from './render';


rerederEntireTree(state)
