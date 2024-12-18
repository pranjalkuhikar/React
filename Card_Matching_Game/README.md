# Steps Of Creating Memory Game

1] Creating a array of Objects

```
const emojies = ["😎", "😊", "🫡", "🤗", "💗", "⚙️", "✌️", "⭐", "💴"];

```

2] Creating useState() and giving initial value emojies in it like this

```

const[emoji,setEmoji]=useState(emojies);

```

3] Mapping this with emojies through initial state
emoji.map((item,idx)=>(

```

<div key={idx}>{item}</div>
```

))

4] Reset Logic :- I create a Reset Button When I click on this button it should be reset and changes the emojies position through Math.random()

```
<div onClick={reset}>Reset Game</div>
```

```R
    const reset = ()=>{
        const shuffle =  [...emojies];
        shuffle.sort(()=>Math.random()*0.5);
        setEmojis(shuffle);
    }
```

5] Turn Logic :- I need whenever I Click on any Card Turn should be Updated by one

```
const [turns, setTurns] = useState(0);

```

```
const handlerCard = () => {
    setTurns((prev) => prev + 1);
  };
```

```
<div key={idx} onClick={handlerCard}>{item}</div>
```

```R
  const reset = ()=>{
      const shuffle =  [...emojies];
      shuffle.sort(()=>Math.random()*0.5);
      setEmojis(shuffle);
      setTurns(0);
  }
```

```
<div onClick={reset}>Reset Game</div>
```

```
<div>Turns :- {turns}</div>
```
