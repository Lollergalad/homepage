import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TYPE_PHASES from "../constants/typePhase";

const TYPING_INTERVAL = 75;
const PAUSING_TIME = 1500;
const DELETING_INTERVAL = 40;

const useTypeHook = (dynamicWords) => {
  const [phase, setPhase] = useState(TYPE_PHASES.TYPING);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dynamicWord, setDynamicWord] = useState("");

  useEffect(() => {
    switch (phase) {
      case TYPE_PHASES.TYPING: {
        const nextDynamicWord = dynamicWords[selectedIndex].slice(
          0,
          dynamicWord.length + 1
        );

        if (nextDynamicWord === dynamicWord) {
          setPhase(TYPE_PHASES.PAUSING);
          return;
        }

        const interval = setInterval(() => {
          setDynamicWord(nextDynamicWord);
        }, TYPING_INTERVAL);

        return () => clearInterval(interval);
      }
      case TYPE_PHASES.DELETING: {
        if (!dynamicWord) {
          const nextIndex =
            selectedIndex === dynamicWords.length - 1 ? 0 : selectedIndex + 1;

          setSelectedIndex(nextIndex);
          setPhase(TYPE_PHASES.TYPING);

          return;
        }

        const nextRemaining = dynamicWords[selectedIndex].slice(
          0,
          dynamicWord.length - 1
        );

        const interval = setInterval(() => {
          setDynamicWord(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearInterval(interval);
      }
      case TYPE_PHASES.PAUSING:
      default:
        const interval = setInterval(() => {
          setPhase(TYPE_PHASES.DELETING);
        }, PAUSING_TIME);

        return () => clearInterval(interval);
    }
  }, [dynamicWord, dynamicWords, phase, selectedIndex]);

  return { dynamicWord, phase, selectedWord: dynamicWords[selectedIndex] };
};

useTypeHook.propTypes = {
  dynamicWords: PropTypes.arrayOf([PropTypes.string]),
};

export default useTypeHook;
