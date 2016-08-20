/**
 * Created by Ray on 2016/8/20.
 */
//main.js
// Greeter.js
import React,{Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'
class Greeter extends Component{
    render(){
        return <div className={styles.root}>
            {config.greetText}
        </div>
    }
}
export default Greeter