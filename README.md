A Component for making text editable with input like features

## Installation


```
npm i react-text-content-editable
```

## Demo

<a href="https://mpcv6.csb.app/" target="_blank">https://mpcv6.csb.app/ </a><br/>
<a href="https://mpcv6.codesandbox.io/" target="_blank">https://mpcv6.codesandbox.io/ </a>

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
            tag='p'
            type='text'
            maxLength='20'
            onChange={onChange}
            value={text}
         />
  )
}
```

### Editable Text
```js
<Editable
    tag="h1"
    type='text'
    maxLength='20'
    onChange={onChange}
    value={data}
/>
```


### Editable Text Read only
```js
<Editable
    tag="h1"
    type='text'
    maxLength='20'
    onChange={onChange}
    readOnly={true}
/>
```



## Contributing
We would love some contributions! Check out <a href="https://github.com/pkumar98/react-text-content-editable">this document</a> to get started.

