import { createContext } from 'react';
import run from '../config/gemini';
import { useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  const delayTyping = (index, nextWord) => {
    setTimeout(() => {
      setData(previous => previous + nextWord);
    }, 75 * index)
  }

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {
    setData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt(prev => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }
    let responseArr = response.split("**");
    let newArr = "";
    for (let i = 0; i < responseArr.length; i++){
      if (i === 0 || i % 2 !== 1) {
        newArr += responseArr[i];
      } else {
        newArr += "<b>" + responseArr[i] + "</b>";
      }
    }
    let newOtherArr = newArr.split("*").join("</br>");
    let newResponseArr = newOtherArr.split(" ");
    for (let j = 0; j < newResponseArr.length; j++){
      const nextWord = newResponseArr[j];
      delayTyping(j, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    data,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
