import {useState} from 'react'

const RockPaperScissors = () => {
    const [userChoice, setUserChoice] = useState("");
    const [cpuChoice, setCpuChoice] = useState("");
    const [roundCounter, setRoundCounter] = useState(0);
    const [maxRoundNum, setMaxRoundNum] = useState(5);
    const [winsCpu, setWinsCpu] = useState(0);
    const [winsUser, setWinsUser] = useState(0);

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissor";

    const userChoiceFunction = (choice) => {
        setRoundCounter(roundCounter +1);
        setUserChoice(choice);
        cpuRandomChoice();
        battleWinner();
        compareRounds();
    };

    const functionMaxRoundNumChange = (e) => {
        setMaxRoundNum(Number(e.target.value));
    };

    const cpuRandomChoice = () => {
        const randomNumber = Math.floor(Math.random () * 3);
        if (randomNumber === 0 ) {
            setCpuChoice(rock);
        }   else if (randomNumber === 1) {
            setCpuChoice(paper);
        } else {
            setCpuChoice(scissors);
        }
    };

    const battleWinner = () => {
        if (
            (userChoice === "rock" && cpuChoice === "paper") || 
            (userChoice == "paper" && cpuChoice === "scissors") || 
            (userChoice === "scissors" && cpuChoice ==="rock" )
        ) {
            setWinsCpu(winsCpu +1);
            document.querySelector("#WhoBeatsWho").innerHTML = "You are the LOOSER"

        } else if (
            (userChoice === "paper" && cpuChoice === "rock") || 
            (userChoice === "scissors" && cpuChoice  === "paper") ||
            (userChoice === "rock" && cpuChoice === "scissors" )
        ) {
            setWinsUser(winsUser + 1)
            document.querySelector("#WhoBeatsWho").innerHTML = "You're the WINNER"
        } else (
            document.querySelector("#WhoBeatsWho").innerHTML = "DRAW"
        )
    };

    const compareRounds = () => {
        if (roundCounter >= maxRoundNum) {
            andTheWinnerIs();
            setTimeout(reset, 2000);
        }
    };

    const andTheWinnerIs = () => {
        if (winsUser > winsCpu){
            document.querySelector("#finalResult").innerHTML = "CONGRATULATIONS you beat the CPU";
            document.querySelector("#WhoBeatsWho").innerHTML = "";
        } else if (winsCpu > winsUser){
            document.querySelector("#finalResult").innerHTML = "UFF maybe next time, you LOOSE";
            document.querySelector("#WhoBeatsWho").innerHTML = "";
        } else {
            document.querySelector("#finalResult").innerHTML = "OH HA you're as good as a Machine";
            document.querySelector("#WhoBeatsWho").innerHTML = "";
        }
    };

    const reset = () => {
        setWinsCpu(0);
        setWinsUser(0);
        setRoundCounter(0);
        setUserChoice("");
        setCpuChoice("");
        document.querySelector(".userResult").innerHTML = 0;
        document.querySelector(".cpuResult").innerHTML = 0;
        document.querySelector("#finalResult").innerHTML = "Let's play";
        document.querySelector("#WhoBeatsWho").innerHTML = "";
    };

    return (
        <main>
            <div className='wrapper'>
                <div className='headline'>
                    <span style={{"--i":1}}>R</span>
                    <span style={{"--i":2}}>o</span>
                    <span style={{"--i":3}}>c</span>
                    <span style={{"--i":4}}>k</span>
                    <span style={{"--i":5}}> </span>
                    <span style={{"--i":6}}>P</span>
                    <span style={{"--i":7}}>a</span>
                    <span style={{"--i":8}}>p</span>
                    <span style={{"--i":9}}>e</span>
                    <span style={{"--i":10}}>r</span>
                    <span style={{"--i":12}}>S</span>
                    <span style={{"--i":13}}>c</span>
                    <span style={{"--i":14}}>i</span>
                    <span style={{"--i":15}}>s</span>
                    <span style={{"--i":16}}>s</span>
                    <span style={{"--i":17}}>o</span>
                    <span style={{"--i":18}}>r</span>
                    <span style={{"--i":1}}>s</span>
                </div>
                <h3>How many rounds?</h3>
                <section id='chooseRoundNum'>

                    <input  type="radio" id="fuenf" name="roundsNum" value="5" className="fuenf form" checked={maxRoundNum===5}
                    onChange={functionMaxRoundNumChange}/>
                    <label htmlFor="fuenf">5</label>

                    <input type="radio" id="fuenfzehn" name="roundsNum" value="15" className="fuenfzehn form" checked={maxRoundNum===15} onChange={functionMaxRoundNumChange}/>
                    <label htmlFor="fuenfzehn">15</label>

                    <input type="radio" id="zehn" name="roundsNum" value="10" className="zehn form" checked={maxRoundNum===10} onChange={functionMaxRoundNumChange}/>
                    <label htmlFor="fuenfzehn">10</label>

                    <input type="radio" id="zwanzig" name="roundsNum" value="20" className="zwanzig form" checked={maxRoundNum===20} onChange={functionMaxRoundNumChange}/>
                    <label htmlFor="zwanzig">20</label>
                </section>

                <p id='WhoBeatsWho'></p>
                <section id='points'>
                    <p className='who'>User</p>
                    <div className='pointsTable'>
                        <p className='userResult'>{winsUser}</p>
                        <p>:</p>
                        <p className='cpuResult'>{winsCpu}</p>
                    </div>
                    <p className='Who'>CPU</p>
                </section>

                <p id='finalResult'>Let's play</p>

                <section id='pictures'>
                    <img src="./img/Rock2.png" alt="#" className='outputImage' id='rock'
                    onClick={() => userChoiceFunction("rock")}
                     />
                    <img src="./img/PaperCut.png" alt="#"
                    className='outputImage' id='paper'
                    onClick={() => userChoiceFunction("paper")}
                      />
                    <img src="./img/Scissor3.png" alt="#"
                    className='outputImage' id='scissors' onClick={() => userChoiceFunction("scissors")}
                     />
                </section>

                <h3 id='chooseWeapon'>Choose your Weapon</h3>

                <button className='btn' onClick={reset}>restart Game</button>
            </div>
        </main>
    )

}

export default RockPaperScissors;