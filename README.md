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
npm i react-text-content-editable
```

## Usage


```javascript
import React, { useState } from 'react'
import Editable from 'react-text-content-editable'

const App = () => {
  const [text, setText] = useState('')

  const onChange = (value) => {
    setText(value)
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

### Input text
```js
<Editable
    type='text'
    maxLength='20'
    onChange={onChange}
/>
```

### Pre Populated value
```js
<Editable
    type='text'
    maxLength='20'
    onChange={onChange}
    disabled={true}
    value='Pradeep Kumar'
/>
```

### Input text disabled
```js
<Editable
    type='text'
    maxLength='20'
    onChange={onChange}
    disabled={true}
/>
```

### Textarea
```js
<Editable
    type='textarea'
    height='100'
    maxLength='20'
    onChange={onChange}
/>
```


## Contributing
We would love some contributions! Check out <a href="https://github.com/pkumar98/react-text-content-editable">this document</a> to get started.

