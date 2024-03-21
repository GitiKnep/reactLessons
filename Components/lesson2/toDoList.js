import React from "react";
export default class ToDoList extends React.Component {
    state = {
        list: ["wash", "cook", "hw"],
        num: 0
    };
    txt = "";

    addNum = () => {
        let num2 = this.state.num;
        this.setState({ num: num2 + 1 })
    }
    addToDo = () => {
        let x = [this.txt, ...this.state.list]
        this.setState({ list: x })
    }

    delete = (index) => {
        let r = [...this.state.list];
        r.splice(index, 1);
        this.setState({ list: r });
    }

    changeTxt = (e) => {
       
        this.txt = e.target.value;

    }
    print = (s) => {
        alert(s)

    }
    render() {
        let myC = "";
        if (this.state.list.length < 3)
            myC = "short";
        return (<div>
            {this.txt}
            {this.state.num}
            <h2>WHAT TO DO?</h2>
            <div>
                <input type="text" onKeyUp={this.changeTxt} />
                <input type="button" value="אחד למספר הוסף" onClick={this.addNum} />
                <input type="button" value="הוסף" onClick={this.addToDo} />
            </div>
            <ul>
                {this.state.list.map((item, index) => {
                    return <li className={myC} onClick={() => { this.print(item) }}>{item}
                        <input type="button" value="מחק אותי" onClick={(e) => {
                            e.stopPropagation();
                            this.delete(index)

                        }}></input></li>
                })}
            </ul>
            </div >)
    }
}

