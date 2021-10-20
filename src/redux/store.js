// 创建redux中的store 对象
/*** 
 * 暴露store 对象
 */
import { createStore } from 'redux';
import countReducer from './count_reducer'
// 暴露store
export default createStore(countReducer); 