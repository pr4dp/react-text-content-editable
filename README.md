A Component for making text editable with input like features

## react-text-content-editable

```js
<Editable
    type='text'
    maxLength='20'
    onChange={onChange}
/>
```
## Installation


```
npm react-text-content-editable
```

## Usage


```javascript
import React, { useState } from 'react'
import Editable from 'react-text-content-editable'

const App = () => {
  const [text, setText] = useState('')

  const onChange = () => {
    setText(current)
  }

  return (
        <Editable 
            type='text'
            maxLength='20'
            onChange={onChange}
         />
  )
}
```

### input text
```js
<Editable
    type='text'
    maxLength='20'
    onChange={onChange}
/>
```

### textarea
```js
<Editable
    type='textarea'
    height='100'
    maxLength='20'
    onChange={onChange}
/>
```

