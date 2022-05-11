/* Corregir en el text area las palabras que estan mal */

import React, { useState } from 'react';

const AutocorrectTextarea = ({corrections}) => {
  const [value, setvalue] = useState('');

  const handleChange = (e) => {
    const currentValue = e.target.value
    if(currentValue[currentValue.length - 1] === ' '){
      const word = currentValue.split(' ')
      word.pop()
      const lastWord = word.pop()
      const correctWord = corrections[lastWord] ? corrections[lastWord] : lastWord
      const finallyString = ([ ...word, correctWord].join(' ')) + ' '
      setvalue(finallyString)
    }else{
      setvalue(currentValue)
    }
  }

  return (
    <div className="text-center">
      <textarea data-testid="textarea" rows={10} cols={80} className="card" onChange={handleChange} value={value} />
    </div>
  );
}

export default AutocorrectTextarea;